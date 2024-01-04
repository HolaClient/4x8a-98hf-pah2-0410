const fs = require('fs').promises;
const path = require('path');

async function glf() {
  const logDirectory = path.join('./storage/logs/dashboard');
  try {
    const logFiles = await fs.readdir(logDirectory);

    if (logFiles.length === 0) {
      console.error('No log files found.');
      return null;
    }

    let latestLogFile = logFiles[0];
    let latestPath = path.join(logDirectory, latestLogFile);

    for (const current of logFiles) {
      const currentPath = path.join(logDirectory, current);
      const [currentStats, latestStats] = await Promise.all([
        fs.stat(currentPath),
        fs.stat(latestPath),
      ]);

      if (currentStats.mtimeMs > latestStats.mtimeMs) {
        latestLogFile = current;
        latestPath = currentPath;
      }
    }
    return latestPath;
  } catch (error) {
    console.error(`Error reading log directory: ${error.message}`);
    return null;
  }
}

async function rlf(filePath) {
  try {
    const logContent = await fs.readFile(filePath, 'utf8');
    return logContent;
  } catch (error) {
    console.error(`Error reading log file: ${error.message}`);
    return null;
  }
}

module.exports = { glf, rlf };
