<p align="center">
  <img src="https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png" alt="Gray shape shifter" height="120" style="max-width: 100%;">
</p>
<h1 align="center" tabindex="-1" dir="auto">Hola Client</h1>
<p align="center" dir="auto">A modern client area for Pterodactyl and Jexactyl.</p>
<p align="center">
  <a><img src="https://img.shields.io/github/downloads/CR072/HolaClient/total?color=blue&label=Downloads @ Total"/>
  <img src="https://img.shields.io/github/downloads/CR072/HolaClient/latest/total?color=blue&label=Downloads @ Latest"/>
  <a href="https://discord.gg/CvqRH9TrYK"><img src="https://img.shields.io/discord/1038719273658499072?color=blue&label=Discord&logo=HolaClient&logoColor=blue" alt="discord" />
  <a href="https://docs.holaclient.tech"><img alt="Website" src="https://img.shields.io/website?down_color=lightred&down_message=Offline&label=Docs&up_color=blue&up_message=Online&url=https%3A%2F%2Fholaclient.tech%2F">
  <a  href="https://github.com/CR072/HolaClient/stargazers"><img src="https://img.shields.io/github/stars/CR072/HolaClient?label=Stars %E2%AD%90" height="20"/></a>
</p>

---

## 🪶 Features
- **Anti-PteroVM:** Automatically suspends servers using PteroVM.
- **Anti-Miner:** Automatically deletes servers using mining scripts.
- Subdomain Management: Assign subdomains for users' servers.
- Bandwidth Sharing: Arc.io integration.
- Background Wallpaper: Customizable.
- Resource Management: View, buy, and gift coins.
- Mobile Optimized: Optimized webview for all devices.
- Coins: Host's own economy system.
- Store: Buy/sell resources.
- Coupons: Create, edit, and manage coupons.
- Servers: View, edit, delete, and create servers.
- User Settings: User-editable settings.
- API: Used by bots to control the client.
- Discord OAuth2: Login using Discord.
- Databases and Ports: Create servers with additional resources.
- Dashboard: User-friendly management client.
- Join for Rewards: Earn money by joining a server.
- Admin: Admin management area.
- Landing Page with updated information.
- Purge System: Purge inactive servers easily.
- Edit settings from the admin page.
- Webhook: Log actions to webhooks.
- Gift resources: Transfer resources or coins.
- Stripe API: Billing system using Stripe.
- Legal: Built-in Terms of Service and Privacy Policy.
- Linkvertise Earning: Earn coins by completing a link.
- Role Packages: Give a package to users who have the role.

---

## 👀 Preview
Landing Page (v1.5.6):
![Landing Page](https://github.com/CR072/HolaClient/assets/102372274/8b3b0cea-1b7f-44e3-abf4-6da6c09a6e2b)

Admin Home (v1.5.6):
![Admin Home](https://github.com/CR072/HolaClient/assets/102372274/7a748fb0-1d6d-43ea-a1e2-4ce394d1d363)

Dashboard (v1.5.6):
![Dashboard](https://github.com/CR072/HolaClient/assets/102372274/da903395-0c60-4b4c-bd38-ab458699ba48)

---

## 👁️ Demo
HolaClient Demo: [https://demo.holaclient.tech/](https://demo.holaclient.tech/)

---

## ⬇️ Installation
Using Pterodactyl Panel:
1. Download and install the [HolaClient](https://github.com/ItzBenoitXD/holaclient-installer) egg into your panel.
2. Create a server and wait until the latest version is downloaded.
3. Configure the `settings.json` file and start the server.
4. Optionally, set up a domain for HolaClient by following the "Configuring SSL" section.

---

## 💠 Configuring SSL
Using Certbot:
1. Point the domain to your VPS IP address using your DNS manager (e.g., point `client.example.com` to `127.0.0.0`).
2. Run the following commands on your Linux server:
    ```bash
    apt install nginx && apt install certbot
    ```
   
    ```bash
    ufw allow 80 && ufw allow 443
    ```
   
    ```bash
    certbot certonly -d <domain>
    ```
   
    ```bash
    nano /etc/nginx/sites-enabled/holaclient.conf
    ```
    
    after pasting the Nginx config run theses commands
    
   ```bash
    sudo nginx -t
    ```
   
    if theres no errors execute the last command
   
    ```terminal
    systemctl restart nginx
    ```
     If any errors occur, feel free to contact us on our Discord server.

3. Copy the following config and paste it into `hclient.conf`, replacing the necessary information:
```nginx
server {
 listen 80;
 server_name <hclient domain>;
 return 301 https://$server_name$request_uri;
}

server {
 listen 443 ssl http2;

 location /afkwspath {
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection "upgrade";
     proxy_pass "http://<ip or domain of node>:<port>/afkwspath";
 }

 server_name <hclient domain>;
 ssl_certificate /etc/letsencrypt/live/<hclient domain>/fullchain.pem;
 ssl_certificate_key /etc/letsencrypt/live/<hclient domain>/privkey.pem;
 ssl_session_cache shared:SSL:10m;
 ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
 ssl_ciphers HIGH:!aNULL:!MD5;
 ssl_prefer_server_ciphers on;

 location / {
     proxy_pass http://<ip or domain of node>:<port>/;
     proxy_buffering off;
     proxy_set_header X-Real-IP $remote_addr;
 }
}
```
## ⚖️  Legal
You shall not remove HolaClient credits from the footer, if removed your host will be taken down by DMCA take down if used in public. You can change the position if you're using a theme. HolaClient is licensed under MIT License.
