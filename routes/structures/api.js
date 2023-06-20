const indexjs = require("../../index.js");
const adminjs = require("../admin/admin.js");
const fs = require("fs");
const ejs = require("ejs");
const settings = require("../../settings.json")
const fetch = require('node-fetch');
const NodeCache = require( "node-cache" );
const Queue = require("../handlers/Queue.js");
const myCache = new NodeCache({ deleteOnExpire: true, stdTTL: 59 });
const log = require('../handlers/log.js');
const { ServerBuilder } = require("nodeactyl");

module.exports.load = async function (app, db) {
  app.get("/api", async (req, res) => {
    let settings = await check(req, res);
    if (!settings) return;
    res.send(
      {
        "status": true
      }
    );
  });

  app.get("/api/version", async (req,res) => {
    await fetch("https://api.github.com/repos/CR072/HolaClient/releases/latest")
    .then(response => response.json())
    .then(json => {
        res.send(`{"name": "${json.name}", "current_version": "v${settings.version}" }`)
    })
  })
  
  app.get("/api/userinfo", async (req, res) => {
    let settings = await check(req, res);
    if (!settings) return;

    if (!req.query.id) return res.send({ status: "missing id" });

    if (!(await db.get("users-" + req.query.id))) return res.send({ status: "invalid id" });

    let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());

    if (newsettings.api.client.oauth2.link.slice(-1) == "/")
      newsettings.api.client.oauth2.link = newsettings.api.client.oauth2.link.slice(0, -1);

    if (newsettings.api.client.oauth2.callbackpath.slice(0, 1) !== "/")
      newsettings.api.client.oauth2.callbackpath = "/" + newsettings.api.client.oauth2.callbackpath;

    if (newsettings.pterodactyl.domain.slice(-1) == "/")
      newsettings.pterodactyl.domain = newsettings.pterodactyl.domain.slice(0, -1);

    let packagename = await db.get("package-" + req.query.id);
    let package = newsettings.api.client.packages.list[packagename ? packagename : newsettings.api.client.packages.default];
    if (!package) package = {	
      ram: 0,	
      disk: 0,	
      cpu: 0,	
      servers: 0	
    };
    package["name"] = packagename;
    let avatar = await db.get("profile-" + req.query.id)
    let pterodactylid = await db.get("users-" + req.query.id);
    let userinforeq = await fetch(
      newsettings.pterodactyl.domain + "/api/application/users/" + pterodactylid + "?include=servers",
      {
        method: "get",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${newsettings.pterodactyl.key}` }
      }
    );
    if (await userinforeq.statusText == "Not Found") {
      console.log("[WEBSITE] An error has occured while attempting to get a user's information");
      console.log("- Discord ID: " + req.query.id);
      console.log("- Pterodactyl Panel ID: " + pterodactylid);
      return res.send({ status: "could not find user on panel" });
    }
    let userinfo = await userinforeq.json();

    res.send({
      status: "success",
      package: package,
      profile: avatar,
      extra: await db.get("extra-" + req.query.id) ? await db.get("extra-" + req.query.id) : {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0
      },
      userinfo: userinfo,	
      coins: newsettings.api.client.coins.enabled == true ? (await db.get("coins-" + req.query.id) ? await db.get("coins-" + req.query.id) : 0) : null
    });
  });
  
  app.get('/api/package/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const packagename = await db.get("package-" + userId);
      const packageList = settings.api.client.packages.list;
      const defaultPackage = settings.api.client.packages.default;
      const packageName = packagename ? packageList[packagename].name : packageList[defaultPackage].name;
  
      res.json({ packageName });
    } catch (error) {
      console.error("Failed to fetch package information:", error);
      res.status(500).json({ error: "Failed to fetch package information" });
    }
  });
  
  app.get('/api/admin/servers', async (req, res) => {
    const perPage = req.query.per_page || 50;
    const response = await fetch(`${settings.pterodactyl.domain}/api/application/servers?per_page=${perPage}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${settings.pterodactyl.key}`,
      },
    });
    const json = await response.json();
    const servers = json.data.map((server) => ({
      id: server.attributes.id,
      identifier: server.attributes.identifier,
      name: server.attributes.name,
      node: server.attributes.node,
      egg: server.attributes.egg,
      ram: server.attributes.limits.memory,
      cpu: server.attributes.limits.cpu,
      disk: server.attributes.limits.disk,
      backups: server.attributes.feature_limits.backups,
      allocations: server.attributes.feature_limits.databases,
      databases: server.attributes.feature_limits.allocations
    }));
    res.json(servers);
  });

  app.get('/api/admin/servers/details', async (req,res) => {
    if(!req.query.id) return res.send("Invalid Id")
    let server = {}
    await fetch(settings.pterodactyl.domain + `/api/application/servers/${req.query.id}`, {
      "method": "GET",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
      }
      }).then(response => response.json()) 
      .then(json => {
        server.id = json.attributes.id
        server.identifier = json.attributes.identifier
        server.uuid = json.attributes.uuid
        server.name = json.attributes.name
        server.suspend = json.attributes.suspended
        server.memory = json.attributes.limits.memory
        server.disk = json.attributes.limits.disk
        server.cpu = json.attributes.limits.cpu
        server.node = json.attributes.node
        server.egg = json.attributes.egg
        server.backups = json.attributes.feature_limits.backups
        server.databases = json.attributes.feature_limits.databases
        server.allocations = json.attributes.feature_limits.allocations

      })

    res.send(server)
  })
  
  app.get('/api/admin/server/details', async (req, res) => {
    try {
      if (!req.query.id) {
        return res.status(400).json({ error: 'Invalid Id' });
      }
      const serverId = req.query.id;
      const apikey = settings.pterodactyl.key;
      const domain = settings.pterodactyl.domain;
      const accKey = settings.pterodactyl.account_key
    
      const serverResponse = await fetch(`${domain}/api/application/servers/${serverId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apikey}`
        }
      });
      if (!serverResponse.ok) {
        throw new Error(`Failed to fetch server details: ${serverResponse.status} ${serverResponse.statusText}`);
      }
    
      const serverData = await serverResponse.json();
      const serverIdentifier = serverData.attributes.identifier;
      const clientResponse = await fetch(`${domain}/api/client/servers/${serverIdentifier}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accKey}`
        }
      });
      if (!clientResponse.ok) {
        throw new Error(`Failed to fetch client details: ${clientResponse.status} ${clientResponse.statusText}`);
      }
      const clientData = await clientResponse.json();
      const clientAllocation = clientData.attributes.relationships.allocations.data[0].attributes.ip;
      const clientAlias = clientData.attributes.relationships.allocations.data[0].attributes.ip_alias;
      const clientPort = clientData.attributes.relationships.allocations.data[0].attributes.port;
      res.json({ serverIdentifier, clientAllocation, clientPort, clientAlias });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch server details and client allocation' });
    }
  });
  
  

  app.post("/api/setcoins", async (req, res) => {	
    let settings = await check(req, res);	
    if (!settings) return;	
    if (typeof req.body !== "object") return res.send({status: "body must be an object"});	
    if (Array.isArray(req.body)) return res.send({status: "body cannot be an array"});	
    let id = req.body.id;	
    let coins = req.body.coins;	
    if (typeof id !== "string") return res.send({status: "id must be a string"});	
    if (!(await db.get("users-" + id))) return res.send({status: "invalid id"});	
    if (typeof coins !== "number") return res.send({status: "coins must be number"});	
    if (coins < 0 || coins > 999999999999999) return res.send({status: "too small or big coins"});	
    if (coins == 0) {	
      await db.delete("coins-" + id)	
    } else {	
      await db.set("coins-" + id, coins);	
    }	
    res.send({status: "success"});	
  });
    
  app.get("/api/updateCoins", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");
    let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
    let userinfo = req.session.userinfo
    let b = await db.get(`coins-${req.session.userinfo.id}`)
    if(myCache.get(`coins_${userinfo.id}`) == true) return res.send({coins: b});
    myCache.set(`coins_${userinfo.id}`, true, 59);
    if(await db.get(`coins-${req.session.userinfo.id}`) == null) {
      await db.set(`coins-${req.session.userinfo.id}`, 0)
    } else {
      let e = await db.get(`coins-${req.session.userinfo.id}`)
      e = e + newsettings.api.arcio["afk page"].coins
      await db.set(`coins-${req.session.userinfo.id}`, e)
    }
    let a = await db.get(`coins-${req.session.userinfo.id}`)
    res.send({coins: a})
  })

app.post("/api/createcoupon", async (req, res) => {
    let settings = await check(req, res);
    if (!settings) return;

    if (typeof req.body !== "object") return res.send({status: "body must be an object"});
    if (Array.isArray(req.body)) return res.send({status: "body cannot be an array"});

    let code = typeof req.body.code == "string" ? req.body.code.slice(0, 200) : Math.random().toString(36).substring(2, 15);

    if (!code.match(/^[a-z0-9]+$/i)) return res.json({ status: "illegal characters" });

    let coins = typeof req.body.coins == "number" ? req.body.coins : 0;
    let ram = typeof req.body.ram == "number" ? req.body.ram : 0;
    let disk = typeof req.body.disk == "number" ? req.body.disk : 0;
    let cpu = typeof req.body.cpu == "number" ? req.body.cpu : 0;
    let servers = typeof req.body.servers == "number" ? req.body.servers : 0;

    if (coins < 0) return res.json({ status: "coins is less than 0" });
    if (ram < 0) return res.json({ status: "ram is less than 0" });
    if (disk < 0) return res.json({ status: "disk is less than 0" });
    if (cpu < 0) return res.json({ status: "cpu is less than 0" });
    if (servers < 0) return res.json({ status: "servers is less than 0" });

    if (!coins && !ram && !disk && !cpu && !servers) return res.json({ status: "cannot create empty coupon" });

    await db.set("coupon-" + code, {
      coins: coins,
      ram: ram,
      disk: disk,
      cpu: cpu,
      servers: servers
    });

    return res.json({ status: "success", code: code });
  });

  app.post("/api/revokecoupon", async (req, res) => {
    let settings = await check(req, res);
    if (!settings) return;

    if (typeof req.body !== "object") return res.send({status: "body must be an object"});
    if (Array.isArray(req.body)) return res.send({status: "body cannot be an array"});

    let code = req.body.code;

    if (!code) return res.json({ status: "missing code" });

    if (!code.match(/^[a-z0-9]+$/i)) return res.json({ status: "invalid code" });

    if (!(await db.get("coupon-" + code))) return res.json({ status: "invalid code" });

    await db.delete("coupon-" + code);

    res.json({ status: "success" })
});


  app.post("/api/setplan", async (req, res) => {
    let settings = await check(req, res);
    if (!settings) return;

    if (!req.body) return res.send({ status: "missing body" });

    if (typeof req.body.id !== "string") return res.send({ status: "missing id" });

    if (!(await db.get("users-" + req.body.id))) return res.send({ status: "invalid id" });

    if (typeof req.body.package !== "string") {
      await db.delete("package-" + req.body.id);
      adminjs.suspend(req.body.id);
      return res.send({ status: "success" });
    } else {
      let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
      if (!newsettings.api.client.packages.list[req.body.package]) return res.send({ status: "invalid package" });
      await db.set("package-" + req.body.id, req.body.package);
      adminjs.suspend(req.body.id);
      return res.send({ status: "success" });
    }
  });

  app.post("/api/setresources", async (req, res) => {
    let settings = await check(req, res);
    if (!settings) return;

    if (!req.body) return res.send({ status: "missing body" });

    if (typeof req.body.id !== "string") return res.send({ status: "missing id" });

    if (!(await db.get("users-" + req.body.id))) res.send({ status: "invalid id" });

    if (typeof req.body.ram == "number" || typeof req.body.disk == "number" || typeof req.body.cpu == "number" || typeof req.body.servers == "number") {
      let ram = req.body.ram;
      let disk = req.body.disk;
      let cpu = req.body.cpu;
      let servers = req.body.servers;

      let currentextra = await db.get("extra-" + req.body.id);
      let extra;

      if (typeof currentextra == "object") {
        extra = currentextra;
      } else {
        extra = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0
        }
      }

      if (typeof ram == "number") {
        if (ram < 0 || ram > 999999999999999) {
          return res.send({ status: "ram size" });
        }
        extra.ram = ram;
      }

      if (typeof disk == "number") {
        if (disk < 0 || disk > 999999999999999) {
          return res.send({ status: "disk size" });
        }
        extra.disk = disk;
      }

      if (typeof cpu == "number") {
        if (cpu < 0 || cpu > 999999999999999) {
          return res.send({ status: "cpu size" });
        }
        extra.cpu = cpu;
      }

      if (typeof servers == "number") {
        if (servers < 0 || servers > 999999999999999) {
          return res.send({ status: "server size" });
        }
        extra.servers = servers;
      }

      if (extra.ram == 0 && extra.disk == 0 && extra.cpu == 0 && extra.servers == 0) {
        await db.delete("extra-" + req.body.id);
      } else {
        await db.set("extra-" + req.body.id, extra);
      }

      adminjs.suspend(req.body.id);
      return res.send({ status: "success" });
    } else {
      res.send({ status: "missing variables" });
    }
  });

  const queue = new Queue()
  app.get("/giftcoins", async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect(`/`);

    const coins = parseInt(req.query.coins)
    if (!coins || !req.query.id) return res.redirect(`/gift?err=MISSINGFIELDS`);
    if (req.query.id.includes(`${req.session.userinfo.id}`)) return res.redirect(`/gift?err=CANNOTGIFTYOURSELF`)


    if (coins < 1) return res.redirect(`/gift?err=TOOLOWCOINS`)

    queue.addJob(async (cb) => {

      const usercoins = await db.get(`coins-${req.session.userinfo.id}`)
      const othercoins = await db.get(`coins-${req.query.id}`)
      if (!othercoins) {
        cb()
        return res.redirect(`/gift?err=USERDOESNTEXIST`)
      }
      if (usercoins < coins) {
        cb()
        return res.redirect(`/gift?err=CANTAFFORD`)
      }
  
      await db.set(`coins-${req.query.id}`, othercoins + coins)
      await db.set(`coins-${req.session.userinfo.id}`, usercoins - coins)

      log('Gifted Coins', `${req.session.userinfo.username}#${req.session.userinfo.discriminator} sent ${coins}\ coins to the user with the ID \`${req.query.id}\`.`)
      cb()
      return res.redirect(`/gift?success=true`);

    })
  });

  app.get("/api/servers", async (req, res) => {
    try {
      const response = await fetch(settings.pterodactyl.domain + "/api/application/nodes?include=servers", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${settings.pterodactyl.key}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch nodes and servers: ${response.status} ${response.statusText}`);
      }
  
      const json = await response.json();
  
      let totalServers = 0;
      if (json.data && Array.isArray(json.data)) {
        json.data.forEach((node) => {
          if (node.attributes.relationships.servers && Array.isArray(node.attributes.relationships.servers.data)) {
            totalServers += node.attributes.relationships.servers.data.length;
          }
        });
      }
  
      res.json({ totalServers });
    } catch (error) {
      console.error(`Error while fetching and counting servers: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  app.get("/giftres", async (req, res) => {
    if (!req.session.pterodactyl) return res.send("Not logged in.");
    if (req.query.ram.includes("-")) return res.send("Invalid number.");
    if (req.query.ram.includes("+")) return res.send("Invalid number.");
    let theme = indexjs.get(req);

    let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());
    let failredirect = theme.settings.redirect.failedgiftresources ? theme.settings.redirect.failedgiftresources : "/";
    let successredirect = theme.settings.redirect.giftresources ? theme.settings.redirect.giftresources : "/";
    let usr1 = await db.get("extra-" + req.session.userinfo.id)
    let usr2 = await db.get("extra-" + req.query.id)
    let usr3 = await db.get("users-" + req.query.id)
    if (!req.query.id) return res.redirect(`/gift?err=MISSINGID`);
    if (!usr3) return res.redirect(`/gift?err=INVALIDID`);
    if (req.query.ram || req.query.disk || req.query.cpu || req.query.servers) {
      let ramstring = req.query.ram;
      let diskstring = req.query.disk;
      let cpustring = req.query.cpu;
      let serversstring = req.query.servers;

      let extra1;
      if (typeof usr1 == "object") {
        extra1 = usr1;
      } else {
        extra1 = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0
        }
      }

      let extra2;
      if (typeof usr2 == "object") {
        extra2 = usr2;
      } else {
        extra2 = {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0
        }
      }
      if (ramstring) {
        let ram = parseFloat(ramstring);
        if (ram < 100 || ram > 999999999999999) {
          return res.redirect(`/gift?err=RAMSIZE`);
        }
        if (ramstring > extra1.ram) {
          return res.redirect(`/gift?err=TOMUCHRAM`);
        }
        extra1.ram = extra1.ram - ram
        extra2.ram = extra2.ram + ram
      }

      if (diskstring) {
        let disk = parseFloat(diskstring);
        if (disk < 100 || disk > 999999999999999) {
          return res.redirect(`/gift?err=DISKSIZE`);
        }
        if (diskstring > extra1.disk) {
          return res.redirect(`/gift?err=TOMUCHDISK`);
        }
        extra1.disk = extra1.disk - disk
        extra2.disk = extra2.disk + disk
      }

      if (cpustring) {
        let cpu = parseFloat(cpustring);
        if (cpu < 10 || cpu > 999999999999999) {
          return res.redirect(`/gift?err=CPUSIZE`);
        }
        if (cpustring > extra1.cpu) {
          return res.redirect(`/gift?err=TOMUCHCPU`);
        }
        extra1.cpu = extra1.cpu - cpu
        extra2.cpu = extra2.cpu + cpu
      }

      if (serversstring) {
        let servers = parseFloat(serversstring);
        if (servers < 1 || servers > 999999999999999) {
          return res.redirect(`/gift?err=SERVERSIZE`);
        }
        if (serversstring > extra1.servers) {
          return res.redirect(`/gift?err=TOMUCHSERVERS`);
        }
        extra1.servers = extra1.servers - servers
        extra2.servers = extra2.servers + servers
      }
	  
      db.set("extra-" + req.session.userinfo.id, extra1)
      db.set("extra-" + req.query.id, extra2)

      return res.redirect(`/gift?err=none`);
    }
  });

  async function check(req, res) {
    let settings = JSON.parse(fs.readFileSync("./settings.json").toString());
    if (settings.api.client.api.enabled == true) {
      let auth = req.headers['authorization'];
      if (auth) {
        if (auth == "Bearer " + settings.api.client.api.code) {
          return settings;
        };
      };
    }
    let theme = indexjs.get(req);
    ejs.renderFile(
      `./views/${theme.name}/${theme.settings.notfound}`,
      await eval(indexjs.renderdataeval),
      null,
      function (err, str) {
        delete req.session.newaccount;
        if (err) {
          console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
          console.log(err);
          return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
        };
        res.status(200);
        res.send(str);
      });
    return null;
  }
};
