/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
const WebSocket = require('ws')

class socket {
    constructor(server) {
        this.server = server;
        this.ws = null;
        this.pterodactyl = null;
    }

    async init() {
        this.pterodactyl = await db.get("config") || {};
        if (this.pterodactyl.domain && this.pterodactyl.acc) {
            await this.connect();
        } else {
            return { event: 'error', message: 'Pterodactyl is not configured.', code: 2404 }
        }
    }

    async connect() {
        const a = await fetch(`${this.pterodactyl.domain}/api/client/servers/${this.server}/websocket`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.pterodactyl.acc}`,
            },
        });
        const b = await a.json();

        this.ws = new WebSocket(b.data.socket, { origin: this.pterodactyl.domain });
        this.ws.on('open', () => {
            this.authenticate(b.data.token);
        });
        this.ws.on('message', this.handle.bind(this));
        this.ws.on('error', (error) => {
            return { event: 'error', message: error, code: 2000 }
        });
    }

    authenticate(a) {
        this.ws.send(JSON.stringify({ event: "auth", args: [a] }));
    }

    async handle(a) {
        const b = JSON.parse(a);
        if (b.event === "token expired") {
            await this.connect();
        }
    }

    sendCommand(a) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ event: "send command", args: [a] }));
        } else {
            return { event: 'error', message: 'Websocket is not initialized', code: 2506 }
        }
    }

    sendStats() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ event: "send stats", args: [null] }));
        } else {
            return { event: 'error', message: 'Websocket is not initialized', code: 2506 }
        }
    }

    sendLogs() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ event: "send logs", args: [null] }));
        } else {
            return { event: 'error', message: 'Websocket is not initialized', code: 2506 }
        }
    }

    setState(a) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ event: "set state", args: [a] }));
        } else {
            return { event: 'error', message: 'Websocket is not initialized', code: 2506 }
        }
    }

    stream(a) {
        if (this.ws) {
            this.ws.on('message', (message) => {
                const data = JSON.parse(message);
                a(data);
            });
        } else {
            return { event: 'error', message: 'Websocket is not initialized', code: 2506 }
        }
    }

    close() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

module.exports = socket;