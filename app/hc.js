#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const env = require('dotenv').config();

program
    .version('X.1')
    .description("Welcome to HolaClientX's CLI");

program
    .command('secret')
    .description('Log the session secret key.')
    .action(() => {
        console.log( )
        console.log(chalk.gray("{/} 🗝️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Authentication code for this session is ") + chalk.cyan(process.env.SESSION_SECRET))
        console.log( )
    });

program.parse(process.argv);
