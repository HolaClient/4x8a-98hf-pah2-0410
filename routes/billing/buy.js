const express = require('express');
const app = express();

module.exports.load = async function(app, db) {

app.get('/buy/product/info', (req, res) => {
  const productId = req.query.id;
  const settings = require('../../settings.json');
  const product = settings.billing.products.find(item => item.id == productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});
}