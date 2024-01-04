const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function a(message) {
  if (process.env.APP_DEBUG) {
    console.log(`${chalk.white("[")}${chalk.blue("DEBUG")}${chalk.white("]")}${chalk.white(" [")}${chalk.red("ADMIN")}${chalk.white("] ")}${message}`);
  }
}

function b(message) {
  if (process.env.APP_DEBUG) {
    console.log(`${chalk.white("[")}${chalk.blue("DEBUG")}${chalk.white("] [")}${chalk.green("CLIENT")}${chalk.white("] ")}${message}`);
  }
}

function c(message) {
    console.log(`${chalk.white("[")}${chalk.red("ERROR")}${chalk.white("] [")}${chalk.yellow("BACKEND")}${chalk.white("] ")}${message}`);
}

function d(message) {
  console.log(`${chalk.white("[")}${chalk.red("ERROR")}${chalk.white("] [")}${chalk.yellow("FRONTEND")}${chalk.white("] ")}${message}`);
}

function e(message) {
  if (process.env.APP_DEBUG) {
    console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] ")}${message}`);
  }
}

function f(message) {
  if (process.env.APP_DEBUG) {
    console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] [")}${chalk.gray("ROUTER")}${chalk.white("] Loading route: ")}${message}`);
  }
}

function g(message) {
  console.log(`${chalk.white("[")}${chalk.blue("SETUP")}${chalk.white("] ")}${message}`);
}

function h(message) {
  console.log(`${chalk.white("[")}${chalk.blue("SETUP")}${chalk.white("] [")}${chalk.gray("MIGRATOR")}${chalk.white("] Migrating ")}${message}`);
}

function i(message, method) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${method}] ${message}\n`;
  fs.appendFileSync(path.join(__dirname, '../storage/logs/api/requests.txt'), logEntry);
}

function j(message, method) {
  const timestamp = new Date().toISOString();
  console.log(chalk.bgBlueBright() + chalk.white("[") + chalk.red("API") + chalk.white("] ") + chalk.white("[") + chalk.cyan(timestamp) + chalk.white("]") + chalk.white(" [") + chalk.red(method) + chalk.white("] ") + message);
}
module.exports = {
  a: a,
  c: b,
  s: e,
  r: f,
  t: g,
  m: h,
  b: c,
  f: d,
  ac: j,
  af: i
};
module.exports.load = async function(app, db) {}