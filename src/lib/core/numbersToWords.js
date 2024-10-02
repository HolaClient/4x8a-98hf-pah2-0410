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
 * https://holaclient.dev/X
 * https://github.com/HolaClient/X
 * https://discord.gg/CvqRH9TrYK
 * 
 * @author CR072 <crazymath072.tech>
 * @copyright Copyright (c) 2020 - Present CR072
 * @version 1
 *
 *--------------------------------------------------------------------------
 * app.js - Application startup file.
 *--------------------------------------------------------------------------
*/
module.exports = function (b) {
    const c = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const d = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const e = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const f = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    if (b === 0) return 'Zero';
    if (b < 0) return 'Minus ' + a(Math.abs(b));

    let g = '';
    let h = 0;

    while (b > 0) {
        let i = b % 1000;
        if (i > 0) {
            let j = '';
            if (i % 100 < 20 && i % 100 > 10) {
                j = d[i % 100 - 11];
            } else {
                j = e[Math.floor((i % 100) / 10)];
                if (i % 10 > 0) {
                    j += (j ? ' ' : '') + c[i % 10];
                }
            }
            if (Math.floor(i / 100) > 0) {
                j = c[Math.floor(i / 100)] + ' Hundred' + (j ? ' ' + j : '');
            }
            g = j + (h > 0 ? ' ' + f[h] : '') + (g ? ' ' + g : '');
        }
        h++;
        b = Math.floor(b / 1000);
    }

    return g;
}