import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "dns";

async function resolveHostIp(host: string): Promise<string> {
  try {
    const res = await dns.promises.lookup(host);
    return res.address;
  } catch {
    return host;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "";
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER  
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD  
    const toEmail = process.env.SMTP_TO;
    const fromEmail = process.env.SMTP_FROM
    const configSet = process.env.SMTP_CONFIGSET

    const formattedDate = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailSubject = `New Quote Request - ${name} (${service || "General Inquiry"})`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #00AF66; padding: 16px; border-radius: 6px; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 22px;">New Quote Request</h2>
          <p style="margin: 4px 0 0; font-size: 14px;">Cardora Auto Repair Brampton</p>
        </div>
        <div style="padding: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 140px; color: #555; border-bottom: 1px solid #f0f0f0;">Customer Name:</td>
              <td style="padding: 10px; color: #111; border-bottom: 1px solid #f0f0f0; font-size: 16px;"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; border-bottom: 1px solid #f0f0f0;">Email:</td>
              <td style="padding: 10px; color: #111; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #00AF66;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; border-bottom: 1px solid #f0f0f0;">Phone Number:</td>
              <td style="padding: 10px; color: #111; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}" style="color: #00AF66; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; border-bottom: 1px solid #f0f0f0;">Requested Service:</td>
              <td style="padding: 10px; color: #111; border-bottom: 1px solid #f0f0f0;"><strong>${service || "Not specified / General Inquiry"}</strong></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Submission Time:</td>
              <td style="padding: 10px; color: #777;">${formattedDate} (EST)</td>
            </tr>
          </table>
        </div>
        <div style="font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 12px;">
          Received from Cardora Website Quote Form.
        </div>
      </div>
    `;

    const textContent = `
New Free Quote Request Received:
--------------------------------
Customer Name: ${name}
Email: ${email}
Phone: ${phone}
Requested Service: ${service || "Not specified / General Inquiry"}
Time: ${formattedDate} (EST)
    `.trim();

    // Resolve IP using system DNS lookup to prevent internal resolver timeouts
    const hostIp = await resolveHostIp(smtpHost);

    const transporter = nodemailer.createTransport({
      host: hostIp,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        servername: smtpHost,
      },
    });

    const headers: Record<string, string> = {};
    if (configSet) {
      headers["X-SES-CONFIGURATION-SET"] = configSet;
    }

    const mailInfo = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
      headers,
    });

    console.log("[Quote API] Email successfully dispatched:", mailInfo.messageId);

    return NextResponse.json({
      success: true,
      messageId: mailInfo.messageId,
      message: "Quote request successfully emailed.",
    });
  } catch (err: any) {
    console.error("[Quote API Error]:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
