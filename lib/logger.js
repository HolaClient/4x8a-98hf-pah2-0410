const fs = require('fs');
const path = require('path');
const { Console } = require('console');
const chalk = require('chalk');

module.exports.load = async function(app, db) {
const logFileName = `log_${new Date().toISOString().replace(/[:.]/g, '')}.txt`;
const logFilePath = path.join('./storage/logs/dashboard', logFileName);
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

logStream.write(`==========LOG ${new Date().toISOString().replace(/[:.]/g, '')}==============\n`);

const logger = new Console(process.stdout, logStream);
console = logger;
console.log(chalk.gray("[📝]") + chalk.cyan("[") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Any log from now on will be duly noted in both the console and the log file! "));

const originalConsoleLog = console.log;
console.log = (...args) => {
  originalConsoleLog(...args);
  logStream.write(args.join(' ') + '\n');
};
}