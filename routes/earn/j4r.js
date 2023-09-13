module.exports.load = async function (app, db) {
    app.get('/users/earn/j4r/servers', async (req, res) => {
        if (!req.session.pterodactyl) {
            return res.redirect("/login");
        }
        const joinedServers = await db.get("j4rs-" + req.session.userinfo.id); // Corrected the key
        if (!joinedServers) {
            return res.json({ "success": false, "message": alerts.COULDNOTGETJSERVERS });
        }
        
        const j4rServers = settings.earn.j4r.ads.map(j4rServer => {
            const hasJoined = joinedServers.some(joinedServer => joinedServer.id === j4rServer.id);
            
            return {
                id: j4rServer.id,
                coins: j4rServer.coins,
                name: j4rServer.name,
                invite: j4rServer.invite,
                hasJoined: hasJoined,
            };
        });

        res.json({ "success": true, "message": "j4r servers retrieved successfully.", "j4rServers": j4rServers });
    });
}
