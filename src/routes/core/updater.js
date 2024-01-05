/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * updater.js - HolaClient update manager.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
const fs = modules.fs
const crypto = require('crypto')
const AdmZip = require('adm-zip');
const download = require('download');
const chalk = modules.chalk
const crypt = modules.crypt
const path = modules.path;
const keys = modules.keys
module.exports.load = async function (app, db) {
    try {
        let secret = keys.core.access
        let settings = await db.get('core', 'settings')
        let license;
        let key = await db.get('core', 'license')
        if (key) {
            license = key
        } else {
            license = false
        }
        let users = await db.get('users', 'users')
        let response = await fetch('http://localhost:3000/updates', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${secret}`
            }
        })
        let data = await response.json()
        if (data.success == false && data.registered == false) {
            let info = {
                version: settings.version,
                name: settings.name,
                hostname: process.env.APP_URL,
                license: license,
                telemetry: {
                    users: users.length
                }
                //Trust me bro, I ain't sending any crucial information.
            }
            let response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${secret}`
                },
                body: JSON.stringify(info)
            })
            let data = await response.json()
            if (data.success == true) {
                await db.set('core', 'info', data)
                return
            }
            return
        }
        let request = await fetch('http://localhost:3000/updates', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${secret}`
            }
        })
        let resp = await request.json()
        await db.set('core', 'identification', resp.id)
        let updates = resp.updates
        if (Array.isArray(updates)) {
            updates.forEach(async (update) => {
                let lu = await db.get('core', 'updates') ?? []
                for (let i in lu) {
                    if (lu[i].id != update.id) {
                        init(update);
                        async function init(u) {
                            console.log("");
                            console.log(chalk.gray("{/} 🔄️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Installing update: ") + chalk.cyan(u.id));
                            console.log(" ")
                            let file = 'https://cdn.holaclient.tech/updates/v1/' + u.id + '.jar'
                            wget(file, u.id, u)
                            console.log(chalk.gray("{/} 🔄️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Successfully installed update: ") + chalk.cyan(u.id));
                            console.log(" ")
                        }

                        async function wget(url, id, u) {
                            try {
                                const root = path.resolve(__dirname, '../../../');
                                const filePath = path.join(root, 'storage', 'updates');
                                await download(url, filePath);
                                const zip = new AdmZip(`${filePath}\\${id}.jar`);
                                zip.extractAllTo(path.join(root, 'storage', 'updates', id), true);
                                const files = await fs.promises.readdir(path.join(root, 'storage', 'updates', id));
                                const manifest = require('../../../storage/updates/' + id + '/manifest.json');
                                for (const file of manifest.files) {
                                    const sourcePath = path.join(root, 'storage', 'updates', id, file.location);
                                    const targetPath = path.join(root, file.target);
                                    await moveFile(sourcePath, targetPath);
                                }
                                lu.push({ id: id, info: u })
                                await db.set('core', 'update', lu)
                                await fs.promises.unlink(filePath + "/" + id + "/")
                                return files;
                            } catch (error) {
                                console.error('Error:', error.message);
                                return [];
                            }
                        }
                        async function moveFile(sourcePath, targetPath) {
                            try {
                                await fs.promises.copyFile(sourcePath, targetPath);
                                await fs.promises.unlink(sourcePath);
                            } catch (error) {
                                console.error('Error moving file:', error.message);
                                throw error;
                            }
                        }

                    }
                }
                return
            });
        }
    } catch (error) {
        console.log(error)
    }
}