const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const upload = multer({ dest: 'uploads/' });

module.exports.load = async function (app, db) {
    app.get('/profile', (req, res) => {
        res.render('profile', { userinfo });
      });
      
      app.post('/upload', upload.single('avatar'), (req, res) => {
        if (req.file) {
          const username = req.query.username;
          const filename = `${username}.${req.file.originalname.split('.').pop()}`;
          const avatarURL = `/uploads/${filename}`;
          const filePath = path.join(req.file.destination, req.file.filename);
          const newFilePath = path.join(req.file.destination, filename);
      
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error('Error renaming file:', err);
              res.json({ success: false, error: 'Avatar upload failed' });
            } else {
              const profileKey = `profile-${username}`;
              database.profiles[profileKey] = avatarURL;
      
              res.json({ success: true, avatarURL });
            }
          });
        } else {
          res.json({ success: false, error: 'Avatar upload failed' });
        }
      });
}