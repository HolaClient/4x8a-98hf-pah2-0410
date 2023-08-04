const express = require('express');
const dns = require('dns');
const app = express();
const BOTS_USERAGENT_REGEX = /((AdsBot-)?Google(bot)?)|Yandex(Webmaster|Bot|Metrika)|(bing|msn)bot|Baiduspider|Mail\.RU_Bot|Applebot/;
const BOTS_HOSTNAME_REGEX = /(google(bot)?.com|yandex\.(com|net|ru)|search\.msn\.com|crawl\.baidu\.com|mail\.ru|applebot\.apple\.com)$/;
const NON_HOSTNAMEABLE_BOTS = /Twitterbot|facebookexternalhit|discord/;
const WHITELISTED_USER_AGENT_REGEX = /(Mozilla|Chrome|Firefox)/;

app.use(async (req, res, next) => {
  let isBotAuthorized = false;

  async function verifyBot() {
    if (BOTS_USERAGENT_REGEX.test(req.headers['user-agent'])) {
      const cache = req.session.botsKey;

      if (cache === 'authorized') {
        isBotAuthorized = true;
      } else if (cache === 'nonauthorized') {
        return res.status(403).end();
      } else if (!cache) {
        let hostnames = [];

        try {
          hostnames = await dnsPromisified.reverse(req.ip);
        } catch (e) {
          hostnames = [req.ip];
        }

        for (const hostname of hostnames) {
          if (BOTS_HOSTNAME_REGEX.test(hostname)) {
            req.session.botsKey = 'authorized';
            isBotAuthorized = true;
          } else {
            req.session.botsKey = 'nonauthorized';
            return res.status(403).end();
          }
          break;
        }
      }
    } else if (NON_HOSTNAMEABLE_BOTS.test(req.headers['user-agent'])) {
      isBotAuthorized = true;
    } else if (WHITELISTED_USER_AGENT_REGEX.test(req.headers['user-agent'])) {
      isBotAuthorized = true;
    }

    if (isBotAuthorized) {
      req.session.isVerified = true;
      next();
    } else {
      return res.status(403).end();
    }
  }
  verifyBot();
});
const dnsPromisified = dns.promises;