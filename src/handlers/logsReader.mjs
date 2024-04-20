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
 * logsReader.mjs - Admin side log sender file.
 *--------------------------------------------------------------------------
*/
/**
 *--------------------------------------------------------------------------
 * Importing modules
 *--------------------------------------------------------------------------
*/
import { promises as fsPromises, stat } from 'fs';
import path from 'path';
/**
 *--------------------------------------------------------------------------
 * Actual code
 *--------------------------------------------------------------------------
*/
class x {
  constructor() {
    this.a = path.join('./storage/logs/dashboard');
  }
  async b() {
    try {
      const c = await fsPromises.readdir(this.a);
      if (c.length === 0) {
        console.error('No log files found.');
        return null;
      }
      let d = c[0];
      let e = path.join(this.a, d);
      for (const f of c) {
        const g = path.join(this.a, f);
        const [h, i] = await Promise.all([stat(g), stat(e)]);

        if (h.mtimeMs > i.mtimeMs) {
          d = f;
          e = g;
        }
      }
      return e;
    } catch (j) {
      console.error(`Error reading log directory: ${j.message}`);
      return null;
    }
  }
  async k(l) {
    try {
      const m = await fsPromises.readFile(l, 'utf8');
      return m;
    } catch (n) {
      console.error(`Error reading log file: ${n.message}`);
      return null;
    }
  }
}
export default x;
/**
 *--------------------------------------------------------------------------
 * End of file
 *--------------------------------------------------------------------------
*/