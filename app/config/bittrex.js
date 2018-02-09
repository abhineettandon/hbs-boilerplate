const ccxt = require('ccxt');

const bittrex = new ccxt.bittrex({
    'apiKey': process.env.BITTREX_API_KEY,
    'secret': process.env.BITTREX_API_SECRET
});

module.exports = bittrex;