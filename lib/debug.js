const chalk = require('chalk');
const settings = require('../handlers/settings').settings();

function debuglog(message) {
  if (settings.features.debug.enabled && settings.features.debug.log.admin) {
    console.log(`${chalk.white("[")}${chalk.blue("DEBUG")}${chalk.white("]")}${chalk.white(" [")}${chalk.red("ADMIN")}${chalk.white("] ")}${message}`);
  }
}

function debug(message) {
  if (settings.features.debug.enabled && settings.features.debug.log.users) {
    console.log(`${chalk.white("[")}${chalk.blue("DEBUG")}${chalk.white("] [")}${chalk.green("CLIENT")}${chalk.white("] ")}${message}`);
  }
}

function start(message) {
  if (settings.features.debug.enabled && settings.features.debug.log.startup) {
    console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] ")}${message}`);
  }
}

function startr(message) {
  if (settings.features.debug.enabled && settings.features.debug.log.startup) {
    console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] [")}${chalk.gray("ROUTER")}${chalk.white("] Loading route: ")}${message}`);
  }
}

module.exports = {
  admin: debuglog,
  client: debug,
  a: debuglog,
  c: debug,
  s: start,
  r: startr
};
module.exports.load = async function(app, db) {}