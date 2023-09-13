const settings = require("../../settings.json");

module.exports.load = async function(app, db) {
  app.get("/panel", async (req, res) => {
    res.redirect(settings.pterodactyl.domain);
  });

  app.get("/website", async (req, res) => {
    res.redirect(settings.website.websitelink);
  });

  app.get("/discord", async (req, res) => {
    res.redirect(settings.discord);
  });

  app.get("/auth", async (req, res) => {
    res.redirect('/login');
  });

  app.get("/info", async (req, res) => {
    res.send(`
    <html>
    <head>
        <title>HolaClient v1.5.7</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gradient-to-b from-slate-900 to-black">
    <style>
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap');
      html {
        font-family: 'Nunito sans';
      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, var(--scrollbar-thumb-opacity));
        border-radius: 3px
    }
    
    ::-webkit-scrollbar-track {
        background-color: rgba(209, 213, 219, var(--scrollbar-track-opacity))
    }
    
    ::-webkit-scrollbar-corner {
        background-color: rgba(209, 213, 219, var(--scrollbar-track-opacity));
        border: none;
        height: 6px;
        width: 6px
    }
      main #main_container::before {
        content: "";
        width:100%;
        height:100%;
        top:120%;
        left:0;
        position:absolute;
        transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
      }
    </style>
    <main class="grid min-h-screen place-content-center place-items-center overflow-hidden">
      <div id="main_container" 
      class="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter">
      <a href="https://holaclient.tech" target="blank" class="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] bg-clip-text text-6xl font-bold leading-[1.2] tracking-tighter text-transparent">
        HolaClient <br><span class="text-white">by</span> CR072
      </a>
      </div>
    </main>
    </body>
    </html>
    `)
  });
}