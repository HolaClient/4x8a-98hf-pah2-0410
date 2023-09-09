const fs = require('fs');
const path = require('path');
const config = require('../config.json');

module.exports.load = async function(app, db) {
    function copyFiles(sourceDir, targetDir, fileNames) {
        for (const fileName of fileNames) {
            const sourcePath = path.join(sourceDir, fileName);
            const targetPath = path.join(targetDir, path.basename(fileName));

            if (fs.existsSync(sourcePath)) {
                fs.copyFileSync(sourcePath, targetPath);
            } else {
                console.log(`${fileName} does not exist.`);
            }
        }
    }

    if (config.backup.enabled) {
        const location = config.backup.options.location;
        const overwrite = config.backup.options.overwrite;
        const filesToCopy = [];

        if (config.backup.options.files.database) {
            filesToCopy.push('../storage/databases/db.sqlite');
        }
        if (config.backup.options.files.referral) {
            filesToCopy.push('../storage/databases/referral.sqlite');
        }
        if (config.backup.options.files.settings) {
            if (config.settings.format == "YML") {
                filesToCopy.push('../settings.yml');
            } else if (config.settings.format == "JSON") {
                filesToCopy.push('../settings.json');
            }
        }

        if (filesToCopy.length > 0) {
            if (!fs.existsSync(location)) {
                fs.mkdirSync(location, { recursive: true });
            }

            if (!overwrite) {
                const currentDateTime = new Date().toISOString().replace(/:/g, '-');
                const subDir = path.join(location, currentDateTime);
                fs.mkdirSync(subDir, { recursive: true });
                copyFiles(__dirname, subDir, filesToCopy);
            } else {
                copyFiles(__dirname, location, filesToCopy);
            }
        } else {
            console.log('No files selected for backup.');
        }
    } else {
        console.log('Backup is disabled.');
    }
};
