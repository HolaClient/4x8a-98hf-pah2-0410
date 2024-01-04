#!/usr/bin/env node
const { program } = require('commander');

program
    .version('1.5.9')
    .description("Welcome to HolaClient's CLI");

program
    .command('hc user:make')
    .description('Create a new user.')
    .option('-u, --username <username>', 'Username')
    .option('-e, --email <email>', 'Email')
    .option('-p, --password <password>', 'Password')
    .option('-f, --first-name <first>', 'First Name')
    .option('-s, --second-name <second>', 'Second Name')
    .action((options) => {
        const { username, email, password, first, second } = options;
        console.log(`Creating user: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`First Name: ${first}`);
        console.log(`Second Name: ${second}`);
    });

program.parse(process.argv);
