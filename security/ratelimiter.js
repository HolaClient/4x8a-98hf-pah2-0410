const express = require('express');
const ipaddr = require('ipaddr.js');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('storage/databases/ratelimiter.db');

db.run(`
  CREATE TABLE IF NOT EXISTS rate_limiter (
    id INTEGER PRIMARY KEY,
    ip_string TEXT,
    banned_until INTEGER
  );
`);

async function handleRateLimiter(req, res, options, db) {
  const ip = req.ip;
  const isBotAuthorized = false;

  if (options.rateLimiter.enabled && !isBotAuthorized) {
    const ipString = isIPv4(ip) ? ip : ipaddr.parse(ip).toNormalizedString().split(':').slice(0, 4).join(':') + '::/64';

    try {
      const query = 'SELECT COUNT(*) AS count, MAX(banned_until) AS banned_until FROM rate_limiter WHERE ip_string = ?';
      db.get(query, [ipString], async (err, row) => {
        if (err) {
          console.error('Error executing the query:', err);
          return res.status(500).end();
        }

        const count = row.count;
        const bannedUntil = row.banned_until || 0;
        const now = Math.round(Date.now() / 1000);
        const isBannedAlready = count === 1 && bannedUntil > now;

        if (count >= options.rateLimiter.requests || isBannedAlready) {
          if (isBannedAlready) {
            return res
              .status(429)
              .set({
                'Retry-After': new Date((bannedUntil - now) * 1000).toUTCString()
              })
              .end();
          } else {
            const bannedUntil = now + options.rateLimiter.banFor;

            const insertQuery = 'INSERT INTO rate_limiter (ip_string, banned_until) VALUES (?, ?)';
            db.run(insertQuery, [ipString, bannedUntil], async (err) => {
              if (err) {
                console.error('Error executing the insert query:', err);
                return res.status(500).end();
              }

              if (options.rateLimiter.clearQueueAfterBan) {
                const deleteQuery = 'DELETE FROM rate_limiter WHERE ip_string = ?';
                db.run(deleteQuery, [ipString], async (err) => {
                  if (err) {
                    console.error('Error executing the delete query:', err);
                    return res.status(500).end();
                  }
                });
              }

              return res
                .status(429)
                .set({
                  'Retry-After': new Date(bannedUntil * 1000).toUTCString()
                })
                .end();
            });
          }
        } else {
          const insertQuery = 'INSERT INTO rate_limiter (ip_string, banned_until) VALUES (?, ?)';
          db.run(insertQuery, [ipString, now + options.rateLimiter.per], async (err) => {
            if (err) {
              console.error('Error executing the insert query:', err);
              return res.status(500).end();
            }
          });
        }
      });
    } catch (err) {
      console.error('Error in rate limiter:', err);
      return res.status(500).end();
    }
  }
}

app.use((req, res, next) => {
  const options = {
    rateLimiter: {
      enabled: true,
      requests: 10,
      banFor: 60,
      per: 60,
      clearQueueAfterBan: true,
    },
  };

  handleRateLimiter(req, res, options, db);
  next();
});