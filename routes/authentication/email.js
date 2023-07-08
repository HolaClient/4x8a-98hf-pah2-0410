const settings = require('../../settings.json');
const mailer = require("../handlers/smtp");
const fetch = require("node-fetch");
const log = require('../handlers/log')
const requestIp = require('request-ip');


module.exports.load = async function (app, db) {
    app.get("/auth/login", async (req, res) => {
      if (!req.query.email || !req.query.password) return res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
          <link rel="shortcut icon" href="https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png" type="image/x-icon">
          <title>Missing Information</title>
      </head>
      <body onload="redirect()">
          <h1>Missing Fields! Please Fill all details!</h1>
      </body>
      </html>
      <style>
          body {
              background-color: black;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 90vh;
          }
          h1 {
              color: white;
              text-align: center;
              font-family: poppins;
          }
      </style>
      <script>
          function redirect(){
              setTimeout(function() {
              window.location.href = "./auth";
          }, 5000);
          }
      </script>`)

  // Cookie Alternate Check
  const sessionID = req.sessionID;
  const userSessionID = await db.get(`usersession-${req.query.email}`);
  if (userSessionID && userSessionID !== sessionID) {
    return res.send({ error: "Authentication failed. ALT Account detected!" });
  }

  // IP Alternate Check
  const userIPKey = `userip-${req.query.email}`;
  const userIP = await db.get(userIPKey);
  const clientIP = requestIp.getClientIp(req);
  if (userIP && userIP !== clientIP) {
    return res.send({ error: "Authentication failed. ALT Account detected!" });
  }
    // Check if user exists
    const user = await db.get(`user-${req.query.email}`);
    if (!user) {
      return res.send({ error: "Invalid Email or Password." });
    }
  
    // Verify password
    const validPassword = await req.query.password
    if (!validPassword) {
      return res.send({ error: "Invalid Email or Password." });
    }

        if (!user) return res.send({error: "Invalid Email or Password."});
        if (user.password !== req.query.password) return res.send({error: "Invalid Email or Password."});

        let cacheaccount = await fetch(
            `${settings.pterodactyl.domain}/api/application/users/${await db.get(`users-${req.query.email}`)}?include=servers`,
            {
              method: "get",
              headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
            }
          );
        if (await cacheaccount.statusText == "Not Found") return res.send("An error has occured while attempting to get your user information.");
        cacheaccount = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccount.attributes;
        req.session.userinfo = user;
        return res.redirect("/dashboard")
    });

    app.get("/auth/register", async (req, res) => {
      if (!settings.api.client.email.enabled) {
        return res.send("Email registration is currently disabled.");
      }
      if (!req.query.email || !req.query.username || !req.query.password) return res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
          <link rel="shortcut icon" href="https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png" type="image/x-icon">
          <title>Missing Information</title>
      </head>
      <body onload="redirect()">
          <h1>Missing Fields! Please Fill all details!</h1>
      </body>
      </html>
      <style>
          body {
              background-color: black;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 90vh;
          }
          h1 {
              color: white;
              text-align: center;
              font-family: poppins;
          }
      </style>
      <script>
          function redirect(){
              setTimeout(function() {
              window.location.href = "./auth";
          }, 5000);
          }
      </script>`)
        if (await db.get(`user-${req.query.email}`)) return res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
            <link rel="shortcut icon" href="https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png" type="image/x-icon">
            <title>Already Registered</title>
        </head>
        <body onload="redirect()">
            <h1>You have already registered, please login!</h1>
        </body>
        </html>
        <style>
            body {
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 90vh;
            }
            h1 {
                color: white;
                text-align: center;
                font-family: poppins;
            }
        </style>
        <script>
            function redirect(){
                setTimeout(function() {
                window.location.href = "./auth";
            }, 5000);
            }
        </script>`);
    // Cookie Alternate Check
    const sessionID = req.sessionID;
    const userSessionID = await db.get(`usersession-${req.query.email}`);
    if (userSessionID && userSessionID !== sessionID) {
      return res.send({ error: "Authentication failed. ALT Account detected!" });
    }

    // IP Alternate Check
    const userIPKey = `userip-${req.query.email}`;
    const userIP = await db.get(userIPKey);
    const clientIP = requestIp.getClientIp(req);
    if (userIP && userIP !== clientIP) {
      return res.send({ error: "Authentication failed. ALT Account detected!" });
    }


        const userinfo = {
            username: req.query.username, 
            id: req.query.email,
            password: req.query.password,
            profile: "https://media.discordapp.net/attachments/1108054221456146534/1119261005646680094/images.png",
            discriminator: null
        }
        const accountjson = await fetch(
            `${settings.pterodactyl.domain}/api/application/users`, {
              method: "post",
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${settings.pterodactyl.key}`
              },
              body: JSON.stringify({
                username: req.query.username,
                email: req.query.email,
                first_name: req.query.first_name,
                last_name: "email-auth",
                password: req.query.password
              })
            }
        );
        if (accountjson.status == 201) {
          const accountinfo = JSON.parse(await accountjson.text());
          await db.set(`users-${req.query.email}`, accountinfo.attributes.id);
        } else {
          let accountlistjson = await fetch(
            `${settings.pterodactyl.domain}/api/application/users?include=servers&filter[email]=${encodeURIComponent(req.query.email)}`, {
              method: "get",
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${settings.pterodactyl.key}`
              }
            }
          );
          const accountlist = await accountlistjson.json();
          const user = accountlist.data.filter(acc => acc.attributes.email == req.query.email);
          if (user.length == 1) {
            let userid = user[0].attributes.id;
            await db.set(`users-${userinfo.id}`, userid);
          } else {
            return res.send("An error has occured when attempting to create your account.");
          };
        }
        let cacheaccount = await fetch(
          `${settings.pterodactyl.domain}/api/application/users/${await db.get(`users-${req.query.email}`)}?include=servers`,
          {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
          }
        );
        if (await cacheaccount.statusText == "Not Found") return res.send("An error has occured while attempting to get your user information.");
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        await db.set(`user-${req.query.email}`, userinfo);
        await db.set(`username-${userinfo.id}`, req.query.username);
        await db.set(`profile-${userinfo.id}`, "https://media.discordapp.net/attachments/1108054221456146534/1119261005646680094/images.png")

        let userdb = await db.get("userlist");
        userdb = userdb ? userdb : [];
        if (!userdb.includes(`${userinfo.id}`)) {
          userdb.push(`${userinfo.id}`);
          await db.set("userlist", userdb);
        }
        if (settings.smtp.enabled == true) {
            mailer.sendMail({
              from: settings.name,
              to: userinfo.id,
              subject: `Account Credentials for ${settings.name}`,
              html: `Here are your login details for ${settings.name} Panel:\n Username: ${req.query.username}\n Email: ${userinfo.id}\n Password: ${userinfo.password}`
            });
        }  
        log('Email Register', `${req.query.username} Has registered using Email Auth in ${settings.name}`)
        req.session.pterodactyl = cacheaccountinfo.attributes;
        req.session.userinfo = userinfo;
        return res.redirect("/dashboard");
    });
}
