//THIS FEATURE IS NOT YET READY FOR PRODUCTION!!

module.exports.load = async function (app, db) {
    app.post('/api/notifications', async (req, res) => {
        let notifications = (await db.get("notifications-", req.session.userinfo.hcid)) || [];
        const { text } = req.body;
        if (text) {
            const notification = {
                id: notifications.length + 1,
                text,
                timestamp: new Date().toISOString(),
                read: false,
            };
            notifications.push(notification);
            db.set("notifications-", notifications);
            res.json({ success: true, notification });
        } else {
            res.status(400).json({ success: false, message: 'Text is required.' });
        }
    });

    app.get('/api/notifications', async (req, res) => {
        let notifications = (await db.get("notifications-", req.session.userinfo.hcid)) || [];
        res.json({ success: true, notifications });
    });

    app.put('/api/notifications/:id', async (req, res) => {
        let notifications = (await db.get("notifications-", req.session.userinfo.hcid)) || [];
        const { id } = req.params;
        const notification = notifications.find((n) => n.id == id);
        if (notification) {
            notification.read = true;
            db.set("notifications-", notifications); // Update the notifications in the database
            res.json({ success: true, message: 'Notification marked as read.' });
        } else {
            res.status(404).json({ success: false, message: 'Notification not found.' });
        }
    });

    app.get('/users/notifications/list', async (req, res) => {
        if (!req.session.pterodactyl) return res.redirect("/login");
        try {
            notifications = (await db.get("notifications-", req.session.userinfo.hcid)) || [];
            return res.json({ "success": true, "notifications": notifications });
        } catch (error) {
            console.error('Error getting notifications: ', error);
            res.status(500).json({ "success": false, "message": 'Internal server error.' });
        }
    });

    app.post('/users/notifications/add', async (req, res) => {
        if (!req.session.pterodactyl) return res.redirect("/login");
        try {
            const notify = req.body.notification;
            notifications = (await db.get("notifications-", req.session.userinfo.hcid)) || [];
            notifications.push(notify);
            await db.set("notifications-", notifications); // Update the notifications in the database
            return res.json({ "success": true });
        } catch (error) {
            console.error('Error adding notification: ', error);
            res.status(500).json({ "success": false, "message": 'Internal server error.' });
        }
    });
}
