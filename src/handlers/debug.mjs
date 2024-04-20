/**
 *--------------------------------------------------------------------------
 *  _    _       _        _____ _ _            _  __   __
 * | |  | |     | |      / ____| (_)          | | \ \ / /
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ \ V / 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __| > <  
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ / . \ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__/_/ \_\
 *--------------------------------------------------------------------------
 *
 * https://holaclientx.tech
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright 2022-2024 HolaClient
 * @version 1
 *
 *--------------------------------------------------------------------------
 * debug.mjs - Application debug logs handler file.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Importing modules
 *--------------------------------------------------------------------------
*/
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';
/**
 *--------------------------------------------------------------------------
 * Actual code
 *--------------------------------------------------------------------------
*/
class x {
  constructor() {
    this.a = process.env.APP_DEBUG;
  }
  async b(message, category) {
    if (this.a) {
      console.log(`${chalk.white("[")}${chalk.blue("DEBUG")}${chalk.white("] [")}${chalk.red(category)}${chalk.white("] ")}${message}`);
    }
  }
  async c(message, category) {
    console.log(`${chalk.white("[")}${chalk.red("ERROR")}${chalk.white("] [")}${chalk.yellow(category)}${chalk.white("] ")}${message}`);
  }
  async d(message) {
    if (this.a) {
      console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] ")}${message}`);
    }
  }
  async e(message) {
    if (this.a) {
      console.log(`${chalk.white("[")}${chalk.blue("LOADER")}${chalk.white("] [")}${chalk.gray("ROUTER")}${chalk.white("] Loading route: ")}${message}`);
    }
  }
  async f(message) {
    console.log(`${chalk.white("[")}${chalk.blue("SETUP")}${chalk.white("] ")}${message}`);
  }
  async g(message) {
    console.log(`${chalk.white("[")}${chalk.blue("SETUP")}${chalk.white("] [")}${chalk.gray("MIGRATOR")}${chalk.white("] Migrating ")}${message}`);
  }
  async h(message, method) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${method}] ${message}\n`;
    await fs.appendFile(path.join(__dirname, '../storage/logs/api/requests.txt'), logEntry);
  }
  async i(message, method) {
    const timestamp = new Date().toISOString();
    console.log(chalk.bgBlueBright() + chalk.white("[") + chalk.red("API") + chalk.white("] ") + chalk.white("[") + chalk.cyan(timestamp) + chalk.white("]") + chalk.white(" [") + chalk.red(method) + chalk.white("] ") + message);
  }
}
export default x;
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/