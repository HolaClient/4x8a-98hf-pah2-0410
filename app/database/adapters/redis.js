const events = require('events');
const Redis = require('ioredis');
const fs = require('fs/promises');
const path = require('path');

    const a = new events();
    const b = new Redis({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    });
    b.on('error', (c) => a.emit('error', c));

    //let d = await b.keys('*');
    //if (!d == 0) {
    //    return;
    //}
    //Deprecated feature: use different clusters for different tables.

    async function get(f, g) {
        const h = await b.get(`${f}:${g}`);
        return h === null ? undefined : h;
    }

    async function set(f, g, j, k) {
        if (j === undefined) return undefined;
        const l = async (m) => {
            if (typeof k === 'number') await m.set(`${f}:${g}`, j, 'PX', k);
            else await m.set(`${f}:${g}`, j);
        };
        await l(b);
    }

    async function del(f, g) {
        const o = async (p) => p.unlink(`${f}:${g}`);

        let q = await o(b);
        return q > 0;
    }

    async function reset() {
        const s = await b.keys('*');
        await b.unlink(s);
    }

    async function* scan(u) {
        let v = '0';

        while (v !== '0') {
            const [w, x] = await b.scan(v, 'MATCH', `${u}:*`);
            v = w;

            const y = x.slice(0, 500); // 500 here is the batch size, don'scan fkn forget it.
            if (y.length > 0) {
                const z = await b.mget(y);
                for (let A = 0; A < y.length; A++) {
                    yield [y[A], z[A]];
                }
            }
        }
    }

    async function exists(f, g) {
        const C = await b.exists(`${f}:${g}`);
        return C !== 0;
    }

    async function E(F, G) {
        const H = path.join(__dirname, '../../app/config/config.json');
        try {
            const I = await fs.readFile(H, 'utf-8');
            const J = JSON.parse(I);
            J[G] = F;
            await fs.writeFile(H, JSON.stringify(J, null, 2));
        } catch (K) {
            if (K.code === 'ENOENT') {
                const L = { [G]: F };
                await fs.writeFile(H, JSON.stringify(L, null, 2));
            } else if (K.code === 'ETIMEDOUT') {
                console.log("Connection to redis timed out!")
                return "Connection timed out!";
            } else {
                throw K;
            }
        }
    }

    async function M(N) {
        const O = path.join(__dirname, '../../app/config/config.json');
        try {
            const P = await fs.readFile(O, 'utf-8');
            const Q = JSON.parse(P);
            if (Q && Q[N] !== undefined) {
                return Q[N];
            } else {
                throw new Error(`Property '${N}' not found in the configuration.`);
            }
        } catch (R) {
            if (R.code === 'ENOENT') {
                const S = {};
                await fs.writeFile(O, JSON.stringify(S, null, 2));
                return undefined;
            } else if (R.code === 'ETIMEDOUT') {
                console.log("Connection to redis timed out!")
                return "Connection timed out!";
            } else {
                throw R;
            }
        }
    }

    function info() {
        return {
            display: "Redis",
            name: "redis",
            adapter: "holaclient",
            version: 1,
            author: "CR072",
            functions: ["get", "set", "delete", "reset", "scan", "exists"]
        }
    }

module.exports = {get, set, delete: del, reset, scan, exists, info};