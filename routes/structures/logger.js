const fs = require('fs');
const path = require('path');
const { Console } = require('console');

module.exports.load = async function(app, db) {
  const logFileName = `log_${new Date().toISOString().replace(/[:.]/g, '')}.txt`;
  const logFilePath = path.join('./logs', logFileName);
  const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
  const logger = new Console(process.stdout, logStream);
  console = logger;
  
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    originalConsoleLog(...args);
    logStream.write(args.join(' ') + '\n');
  };
  console.log(`===============LOG ${new Date().toISOString().replace(/[:.]/g, '')}==================`)
  console.log('Any log from now on will be duly noted in both the console and the log file!');
};
