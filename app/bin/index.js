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
        console.log(chalk.white("======================================================="));
        console.log(chalk.gray("{/} 🗝️") + chalk.cyan(" [") + chalk.white("HolaClient") + chalk.cyan("]") + chalk.white(" Authentication code for this session is ") + chalk.cyan(process.env.APP_CODE))
        console.log(chalk.white("======================================================="));
    });

program
    .command('migrate')
    .description('Migrate default factory settings & values to the database.')
    .action(() => {
        require('./migrateFactory')()
        process.exit()
    });

program
    .command('globalkill')
    .description('Turns off every endpoints, pages and incoming requests.')
    .action(() => {
        require('./globalKill')()
        process.exit()
    });

program
    .command('create:user')
    .description('Create a user.')
    .action(() => {
        require('./createUser')();
    });

program.parse(process.argv);