import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import dns from "dns";

// async function resolveHostIp(host: string): Promise<string> {
//   try {
//     const res = await dns.promises.lookup(host);
//     return res.address;
//   } catch {
//     return host;
//   }
// }

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

    console.log("[Quote API] Lead submission received successfully:", {
      name,
      email,
      phone,
      service: service || "General Inquiry",
    });

    /*
    // SMTP Email Sending - Uncomment once SMTP credentials are ready
    const smtpHost = process.env.SMTP_HOST || "";
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const toEmail = process.env.SMTP_TO;
    const fromEmail = process.env.SMTP_FROM;
    const configSet = process.env.SMTP_CONFIGSET;

    const emailSubject = "New Service Enquiry Received";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #222;">
        <p>Hi,</p>
        <p>A new service enquiry has been submitted through <a href="http://CardoraService.com" style="color: #0066cc;">CardoraService.com</a></p>
        <p>Please find the customer details below:<br />
        Name: ${name}<br />
        Email: ${email}<br />
        Phone Number: ${phone}<br />
        Service Requested: ${service || "General Inquiry"}</p>
        <p>Thank you,<br />Cardora Service Team</p>
      </div>
    `;

    const textContent = `Hi,

A new service enquiry has been submitted through CardoraService.com (http://CardoraService.com)

Please find the customer details below:
Name: ${name}
Email: ${email}
Phone Number: ${phone}
Service Requested: ${service || "General Inquiry"}

Thank you,
Cardora Service Team`;

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
    */

    return NextResponse.json({
      success: true,
      message: "Quote request successfully processed.",
    });
  } catch (err: any) {
    console.error("[Quote API Error]:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
