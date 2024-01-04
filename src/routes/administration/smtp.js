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
 * resources.js - Administrative handler to manage resources & coins.
 *--------------------------------------------------------------------------
*/

/**
 *--------------------------------------------------------------------------
 * Loading modules
 *--------------------------------------------------------------------------
*/
const modules = require("../../utils/modules");
const page = modules.page;
const core = modules.core
const fetch = modules.fetch;
const wh = modules.wh;
const SMTPServer = require("smtp-server").SMTPServer;
const { simpleParser } = require("mailparser");
const nodemailer = require("nodemailer");
module.exports.load = async function (app, db) {
    const smtpServer = new SMTPServer({
        logger: true,
        secure: false,
        disabledCommands: ['AUTH', 'STARTTLS'],
        onData(stream, session, callback) {
            stream.pipe(process.stdout);
            stream.on('end', () => {
                callback(null, 'Message queued successfully');
            });
        },
    });
    
    const mailer = nodemailer.createTransport({
        host: '127.0.0.1',
        port: 25,
        secure: false,
        tls: {
            rejectUnauthorized: false,
        },
    });
    
   // app.get('/api/smtp/start', async (req, res) => {
  //      try {
  //          await new Promise((resolve, reject) => {
  //              smtpServer.listen(25, '127.0.0.1', (err) => {
 //                   if (err) {
  //                      reject(err);
  //                  } else {
  //                      console.log('SMTP server is listening on port 25');
   //                     resolve();
   //                 }
    //            });
    //        });
     //       res.json({ success: true });
      //  } catch (error) {
     //       console.error('Error starting SMTP server:', error);
     //      res.json({ success: false, message: 'Error starting SMTP server' });
      //  }
    //});
    
   // app.get('/api/smtp/send', (req, res) => {
     //   const options = {
       //     host: '127.0.0.1',
      //      port: 25,
      //  };
    
      //  const connection = new SMTPConnection(options);
    
        // Define the email envelope and message
   //     const envelope = {
    //        from: 'info@holaclient.tech',
      //      to: 'support@holaclient.tech',
      //  };
    
       // const message = 'Subject: Test Email\r\n\r\nBro lets goo';
    
      //  connection.connect(() => {
       //     connection.send(envelope, message, (error, info) => {
      //          if (error) {
        //            console.error('Error sending email:', error);
         //           res.json({ success: false, message: 'Error sending email' });
          //      } else {
           //         console.log('Email sent:', info.response);
           //         res.json({ success: true, message: 'Email sent successfully' });
         //       }
          //  });
       // });
   // });
}
