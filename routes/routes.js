const indexjs = require("../index.js");
const ejs = require("ejs");
const express = require("express");
const settings = require("../settings.json");
const fetch = require('node-fetch');
const fs = require('fs')
const arciotext = require('./handlers/arciotext.js')

module.exports.load = async function(app, db) {
  app.all("/", async (req, res) => {
    if (req.session.pterodactyl) if (req.session.pterodactyl.id !== await db.get("users-" + req.session.userinfo.id)) return res.redirect("/login?prompt=none")
    let theme = indexjs.get(req);
    if (theme.settings.mustbeloggedin.includes(req._parsedUrl.pathname)) if (!req.session.userinfo || !req.session.pterodactyl) return res.redirect("/login");
    if (theme.settings.mustbeadmin.includes(req._parsedUrl.pathname)) {
      ejs.renderFile(
        `./views/${theme.name}/${theme.settings.unauthorized}`, 
        await eval(indexjs.renderdataeval),
        null,
      async function (err, str) {
        delete req.session.newaccount;
        if (!req.session.userinfo || !req.session.pterodactyl) {
          if (err) {
            console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
            console.log(err);
            return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
          };
          return res.send(str);
        };
  
        let cacheaccount = await fetch(
          settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
          {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
          }
        );
        if (await cacheaccount.statusText == "Not Found") {
          if (err) {
            console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
            console.log(err);
            return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
          };
          return res.send(str);
        };
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
      
        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (cacheaccountinfo.attributes.root_admin !== true) {
          if (err) {
            console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
            console.log(err);
            return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
          };
          return res.send(str);
        };
  
        ejs.renderFile(
          `./views/${theme.name}/${theme.settings.index}`, 
          await eval(indexjs.renderdataeval),
          null,
        function (err, str) {
          if (err) {
            console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
            console.log(err);
            return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
          };
          delete req.session.newaccount;
          res.send(str);
        });
      });
      return;
    };
    ejs.renderFile(
      `./views/${theme.name}/${theme.settings.index}`, 
      await eval(indexjs.renderdataeval),
      null,
    function (err, str) {
      if (err) {
        console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
        console.log(err);
        return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
      };
      delete req.session.newaccount;
      res.send(str);
    });
  });
  const newCode = `
  <footer style="background-color: rgba(0,0,0,.2);" class="card card-body">
     <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center;">
           <small style="color: white; font-weight: 100; font-size: 14px;">
              &copy; <script>document.write(new Date().getFullYear());</script> <a style="color: aquamarine; font-weight: 100; font-size: 14px;" href="<%= settings.discord %>"><%= settings.name %></a>
           </small>
        </div>
             <div class="text-center">
              <a style="color: aquamarine; font-weight: 100; font-size: 14px;" href="https://github.com/HolaClient/HolaClient">HolaClient v<%= settings.version %></a>
             </div>
        <div>
           <a href="../tos">
           <button style="color: aquamarine; background-color: transparent; border: none; cursor: pointer; font-size: 14px;">TOS</button>
           </a>
           <a href="../pp">
           <button style="color: aquamarine; background-color: transparent; border: none; cursor: pointer; font-size: 14px;">Policy</button>
           </a>
        </div>
     </div>
  </footer>
  `;
  
  const filePath = "./views/default/components/footer.ejs";
  fs.writeFile(filePath, newCode, (err) => {
      if (err) {
          console.error('An error occured while checking HolaClient files!');
      }
  });
  app.use('/assets', express.static(`./public/${settings.defaulttheme}`));
  app.use('/admin', express.static(`./public/default`));
  app.use('/cdn', express.static(`./cdn`));
};