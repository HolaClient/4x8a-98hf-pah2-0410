let fileCache = new Map();

function cacheAndCreateRoutes(a, b) {
    let c = fs.readdirSync(a);
    c.forEach(i => {
        let d = path.posix.join(a, i);
        let e = path.posix.join(b, i);
        if (fs.statSync(d).isDirectory()) {
            cacheAndCreateRoutes(d, e);
        } else {
            cacheFile(d);
            app.get(e, async (req, res) => {
                let resAborted = false;
                res.onAborted(() => {
                    resAborted = true;
                });
                let f = fileCache.get(d);
                if (f) {
                    if (!resAborted) {
                        res.cork(() => {
                            res.writeHeader('Content-Type', getContentType(d));
                            res.setStatus(200);
                            res.end(f);
                        });
                    }
                } else {
                    res.cork(() => {
                        res.writeHeader('Content-Type', 'text/plain');
                        res.setStatus(404);
                        res.end('404 Not Found');
                    });
                }
            });
            hcx.watch(d, () => {
                try {
                    cacheFile(d);
                } catch (error) {
                    console.error(error);
                }
            });
        }
    });
}

function cacheFile(a) {
    fs.readFile(a, (err, data) => {
        if (err) {
            console.error(`Error reading file ${a}:`, err);
            return;
        }
        fileCache.set(a, data);
    });
}

module.exports = function (a, b) {
    cacheAndCreateRoutes(b, a);
};

function getContentType(a) {
    let b = path.extname(a).toLowerCase();
    switch (b) {
        case '.html': return 'text/html';
        case '.js': return 'text/javascript';
        case '.css': return 'text/css';
        case '.json': return 'application/json';
        case '.txt': return 'text/text';
        case '.png': return 'image/png';
        case '.jpg': return 'image/jpg';
        case '.jpeg': return 'image/jpeg';
        case '.gif': return 'image/gif';
        case '.svg': return 'image/svg';
        default: return 'application/octet-stream';
    }
}