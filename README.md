<p align="center">
<img src="https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png" alt="Gray shape shifter" height="120" style="max-width: 100%;"></a></p>
<h1 align="center" tabindex="-1" dir="auto">Hola Client</h1>
<p align="center" dir="auto">A modern client area for Pterodactyl and Jexactyl.</p>
<p align="center">
<a><img src="https://img.shields.io/github/downloads/CR072/HolaClient/total?color=blue&label=Downloads @ Total"/>
<img src="https://img.shields.io/github/downloads/CR072/HolaClient/latest/total?color=blue&label=Downloads @ Latest"/>
<a href="https://discord.gg/CvqRH9TrYK"><img src="https://img.shields.io/discord/1038719273658499072?color=blue&label=Discord&logo=HolaClient&logoColor=blue" alt="discord" />
<a href="https://docs.holaclient.tech"><img alt="Website" src="https://img.shields.io/website?down_color=lightred&down_message=Offline&label=Docs&up_color=blue&up_message=Online&url=https%3A%2F%2Fholaclient.tech%2F">
<a  href="https://github.com/CR072/HolaClient/stargazers"><img src="https://img.shields.io/github/stars/CR072/HolaClient?label=Stars %E2%AD%90" height="20"/></a>
<hr>
<h2 tabindex="-1" dir="auto">🪶 Features</h2>
<ul dir="auto">
<li><b>Anti-PteroVM</b> (automatically suspends the servers using PteroVM)</li>
<li><b>Anti-Miner</b> (automatically deletes the server using mining script</li>
<li>Subdomain Management (Assign subdomain for users' servers)</li>
<li>Bandwidth Sharing (Arc.io)</li>
<li>Background Wallpaper (Customizeable)</li>
<li>Resource Management (View, Buy and Gift Coins)</li>
<li>Mobile Optimized (Optimized webview for all types of devices)</li>
<li>Coins (Your host's own economy)</li>
<li>Store (Buy/Sell resources)</li>
<li>Coupons (Create, edit and manage coupons)</li>
<li>Servers (View, Edit, Delete and Create Servers)</li>
<li>User Settings (User editable settings)</li>
<li>API (API is often used by bots to control the client)</li>
<li>Store (buy resources using coins)</li>
<li>Discord oAuth2 (Login using Discord)</li>
<li>Databases and Ports (create servers with additional resources)</li>
<li>Dashboard (user friendly management client)</li>
<li>Join for Rewards (Earn money by joining a server)</li>
<li>Admin (The admin management area)</li>
<li>Landing Page with updated informations</li>
<li>Purge System (Purge inactive servers easily</li>
<li>Edit settings from admin page</li>
<li>Webhook (Log actions to webhooks)</li>
<li>Gift resources (Transfer your resources or coins)</li>
<li>Stripe API (Billing system using stripe)</li>
<li>Legal (Built-IN Terms and Service and Privacy Policy)</li>
<li>Linkvertise Earning (Earn coins by completing a link)</li>
<li>Role Packages (Give a package to users who has the role)
<br><br><br></li>
</ul>
<hr>
<h2 tabindex="-1" dir="auto">👀 Preview</h2>
<p dir="auto">Landing Page (v1.5.5):</p>
<img src="https://github.com/CR072/HolaClient/assets/102372274/d5b858b1-2c90-4e2b-ad28-f42688a7bc0e">
<br/>
<p dir="auto">Admin Home (v1.5.2):</p>
<img src="https://media.discordapp.net/attachments/1082636619804323860/1105974686338257037/image.png">
<br/>
<p dir="auto">Dashboard (v1.5.2):</p>
<img src="https://media.discordapp.net/attachments/1082636619804323860/1105976030814011453/image.png">
<br/>
<hr>
<h2 tabindex="-1" dir="auto">👁️ Demo</h2>
<p dir="auto">HolaClient Demo</p>
<li> https://demo.holaclient.tech/ </li>
<br></hr>
<h2 tabindex="-1" dir="auto">⬇️ Installation</h2>
<p dir="auto">Using Pterodactyl Panel:</p>
<ul dir="auto">
   <li>Download and install <a href="https://github.com/ItzBenoitXD/holaclient-installer">HolaClient</a> egg into your panel.</li>
<li>Create a server and wait until the latest version is downloaded! Isn't it simple?</li>
<li>Configure the settings.json and start the server.</li>   
<li>You can also set-up a domain to HClient by following Configuring SSL section.
<br><br><br></li>
</ul>
               <hr>
               <h2 tabindex="-1" dir="auto">💠 Configuring SSL</h2>
<p dir="auto">Using Certbot:</p>
<ul dir="auto">

<strong>1</strong>  Point the domain to your VPS IP address using your DNS manager.(Ex. point client.example.com to 127.0.0.0).
   <br>
<strong>2</strong>  Run these commands on your Linux server:
   </ul>

    apt install nginx && apt install certbot
   
    ufw allow 80
   
    ufw allow 443
   
    certbot certonly -d <domain>
   
    nano /etc/nginx/sites-enabled/holaclient.conf
    
    after pasting the Nginx config run theses commands
    
    sudo nginx -t
   
    if theres no errors execute the last command
   
    systemctl restart nginx
    
    If it throws any error, feel free to contact us on our Discord server.
               
<strong>3</strong>  Copy this config and paste it to hclient.conf, make sure to edit this using your information.
```Nginx
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
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
location / {
      proxy_pass http://<ip or domain of node>:<port>/;
      proxy_buffering off;
      proxy_set_header X-Real-IP $remote_addr;
  }
}
```
<hr>               
<h2 tabindex="-1" dir="auto">⚖️  Legal</h2>
<p dir="auto">You shall not remove HolaClient credits from the footer, if removed your host will be taken down by DMCA take down if used in public. You can change the position if you're using a theme. HolaClient is licensed under MIT License.</p>
