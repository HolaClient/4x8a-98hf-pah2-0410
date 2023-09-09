const chalk = require('chalk');
const Keyv = require('keyv');
const mysql = require('mysql2/promise');
const config = require('../config.json');

module.exports = {
    db: () => {
        if (config.database.db === 'sqlite') {
            const db = new Keyv('sqlite://storage/databases/db.sqlite');
            db.on('error', err => {
                console.log(chalk.red('[DATABASE] An error has occurred when attempting to access the database.'));
            });
            return db;
        } else if (config.database.db === 'mysql') {
            const pool = mysql.createPool({
                host: config.config.mysql.host,
                user: config.config.mysql.username,
                password: config.config.mysql.password,
                database: config.config.mysql.database
            });

            return {
                async get(key) {
                    const [rows] = await pool.execute('SELECT `value` FROM keyv WHERE `key` = ?', [`keyv:${key}`]);
                    return rows.length ? JSON.parse(rows[0].value).value : undefined;
                },

                async set(key, value) {
                    await this.delete(key);

                    await pool.execute('INSERT INTO keyv (`key`, `value`) VALUES (?, ?)', [`keyv:${key}`, JSON.stringify({
                        value: value,
                        expires: null
                    })]);

                    return true;
                },

                async delete(key) {
                    await pool.execute('DELETE FROM keyv WHERE `key` = ?', [`keyv:${key}`]);

                    return true;
                }
            };
        }
    }
};
