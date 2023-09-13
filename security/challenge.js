const express = require('express');
const rateLimit = require('express-rate-limit');
const { readFileSync, writeFileSync } = require('fs');
const cookieParser = require('cookie-parser');
const app = express();


const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10
});

const blacklist = new Set(readFileSync('blacklist.txt', 'utf8').split('\n').filter(ip => ip));

const logFile = 'requests.log';
app.use(cookieParser());

app.use((req, res, next) => {
  const ip = req.ip;
  if (blacklist.has(ip)) {
    return res.status(403).send('Forbidden');
  }
  limiter(req, res, next);
});

app.use((req, res, next) => {
  const ip = req.ip;
  const path = req.path;
  const timestamp = new Date().toISOString();
  const log = `${timestamp} - ${ip} - ${path}\n`;
  writeFileSync(logFile, log, { flag: 'a+' });
  next();
});

app.use((req, res, next) => {
  if (req.cookies.verificationCompleted === 'true') {
    return next();
  }
});