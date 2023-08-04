const paypal = require('paypal-rest-sdk');
const settings = require('../../settings.json')

paypal.configure({
  mode: 'sandbox',
  client_id: settings.billing.methods.paypal.clientid,
  client_secret: settings.billing.methods.paypal.clientsecret
});
module.exports.load = async function(app, db) {
app.get('/pay', (req, res) => {
  if (!req.session.pterodactyl) return res.redirect('/auth');
  console.log("GATE 1")
    const amount = parseFloat(req.body.price).toFixed(2);
        const payment = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: '/success',
        cancel_url: '/cancel',
      },
      transactions: [{
        item_list: {
          items: [{
            name: req.body.name,
            price: req.body.price,
            currency: `${settings.billing.currency}`,
            quantity: 1,
          }],
        },
        amount: {
          total: String(amount),
          currency: `${settings.billing.currency}`,
        },
        description: 'Payment processed by HolaClient',
      }],
    };
    console.log("GATE 2")

  paypal.payment.create(payment, (error, payment) => {
    console.log("GATE 3")
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      const approvalUrl = payment.links.find(link => link.rel === 'approval_url').href;
      res.redirect(approvalUrl);
    }
    console.log("GATE 4")
  });
});

app.get('/success', (req, res) => {
  const paymentId = req.query.paymentId;
  const payerId = req.query.PayerID;

  paypal.payment.execute(paymentId, { payer_id: payerId }, (error, payment) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      // Payment successful, perform any necessary actions
      res.send('Payment successful');
    }
  });
});

app.get('/cancel', (req, res) => {
  res.send('Payment canceled');
});
}