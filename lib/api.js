const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const logsPath = path.join(__dirname, '../storage/logs/api/api-requests.txt');

function reqlog(message, method) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${method}] ${message}\n`;
  fs.appendFileSync(logsPath, logEntry);
}

function debuglog(message, method) {
  const timestamp = new Date().toISOString();
  console.log(chalk.bgBlueBright() + chalk.white("[") + chalk.red("API") + chalk.white("] ") + chalk.white("[") + chalk.cyan(timestamp) + chalk.white("]") + chalk.white(" [") + chalk.red(method) + chalk.white("] ") + message);
}

module.exports = {
  clog: debuglog,
  flog: reqlog,
};

module.exports.load = async function (app, db) {};
