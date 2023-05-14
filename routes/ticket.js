const express = require('express');
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('tickets/create');
});

router.post('/create', (req, res) => {
  const { subject, message } = req.body;
  const pterodactyl = {
    root_admin: true
  };
  const ticket = {
    subject,
    message,
    createdBy: isAdmin ? 'Admin' : 'User',
    createdAt: new Date(),
    status: 'Open',
    comments: [],
  };

  if (isAdmin) {
    ticket.comments.push('Ticket created by admin.');
    ticket.comments.push('Closing the ticket.');
    ticket.status = 'Closed';
  } else {
    ticket.comments.push('Thank you for creating a ticket. We will assist you shortly.');
  }

  res.redirect('/tickets/show');
});

module.exports = router;
//I AM NOT LONGER WORKING ON TICKETS $H!T