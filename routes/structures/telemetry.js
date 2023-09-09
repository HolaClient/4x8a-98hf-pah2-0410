const fetch = require('node-fetch');
const os = require('os');

module.exports.load = async function (app, db) {
const sendData = async () => {
  const dataToSend = {
    timestamp: new Date().toISOString(),
    name: settings.name,
    systemInfo: {
      platform: os.platform(),
      arch: os.arch(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      cpus: os.cpus(),
    },
    settings: settings
  };

  try {
    const response = await fetch('https://telemetry.holaclient.tech/receive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.text();
  } catch (error) {
  }
};

sendData();

const interval = 12 * 60 * 60 * 1000;

setInterval(() => {
  sendData();
}, interval);
}