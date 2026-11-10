# fixcars.shop (Cardora Auto Repair)

A Next.js web application for Cardora Auto Repair featuring service pages, dynamic quote submission, and interactive 3D elements.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   Create a `.env.local` file with SMTP credentials for quote requests:
   ```env
   SMTP_HOST=""
   SMTP_PORT=000
   SMTP_SECURE=false
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_pass
   SMTP_FROM= ""
   SMTP_TO= ""
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚀 Production Server Setup & Go-Live

### 1. Requirements
- **OS:** Ubuntu 22.04 / 24.04 LTS
- **Runtime:** Node.js 20+ LTS or 22 LTS & npm

### 2. Environment & Build
1. Set up production environment variables in `.env.production` (or `.env`).
2. Install dependencies and build the app:
   ```bash
   npm ci
   npm run build
   ```

### 3. Process Management (PM2)
Run the application continuously in cluster mode:
```bash
npm install -g pm2
pm2 start npm --name "fixcars-shop" -- start
pm2 save
pm2 startup
```

### 4. Reverse Proxy & SSL (Nginx + Certbot)
1. **Nginx:** Proxy public traffic (ports 80 & 443) to `http://127.0.0.1:3000`:
   ```nginx
   server {
       server_name fixcars.shop www.fixcars.shop;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
2. **SSL:** Generate Let's Encrypt certificates:
   ```bash
   sudo certbot --nginx -d fixcars.shop -d www.fixcars.shop
   ```

### 5. Go-Live Checklist
- [ ] **DNS:** Point A records (`@` and `www`) to server IP.
- [ ] **SSL:** Verify automatic HTTPS redirection.
- [ ] **Quote Form:** Submit a test quote from the modal to verify email delivery via `/api/quote`.
- [ ] **3D Wheel:** Confirm interactive canvas loads smoothly on mobile and desktop.
