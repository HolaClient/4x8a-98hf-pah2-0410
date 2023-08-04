const settings = require('../settings.json');
const chalk = require('chalk');

function debuglog(message) {
  if (settings.debug.enabled && settings.debug.log.admin) {
    console.log(chalk.white("[") + chalk.blue("DEBUG") + chalk.white("]") + chalk.white(" [") + chalk.red("ADMIN") + chalk.white("] ") + message);
  }
}

function debug(message) {
  if (settings.debug.enabled && settings.debug.log.users) {
    console.log(chalk.white("[") + chalk.blue("DEBUG") + chalk.white("]") + chalk.white(" [") + chalk.green("CLIENT") + chalk.white("] ") + message);
  }
}

module.exports = {
  admin: debuglog,
  client: debug,
};
module.exports.load = async function(app, db) {}