/**
 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
 *
 *--------------------------------------------------------------------------
 * server.js - Source Code of my server side script to handle telemetry data
 * This file has been included to promote transparency in HolaClient.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const AdmZip = require('adm-zip');
const fetch = require('node-fetch');
const crypto = require('crypto');
const Keyv = require('keyv')
const db = new Keyv('sqlite://db.sqlite');

const app = express();
const port = 3000;
app.use(express.json());

app.get("/updates", async (req, res) => {
});

app.post("/register", async (req, res) => {
});

app.get("/telemetry", async (req, res) => {
});

//The contents were removed to prevent skidders.

function makeid(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    const charactersLength = characters.length;
    const randomBytes = crypto.randomBytes(length);
    let result = '';

    for (let i = 0; i < length; i++) {
        const index = randomBytes[i] % charactersLength;
        result += characters.charAt(index);
    }

    return result;
}

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
