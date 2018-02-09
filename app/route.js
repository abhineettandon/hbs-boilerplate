let express = require('express');
let ctrl = require('./controller');

let route = express.Router();

route.get('/', ctrl.market)

route.get('/market-summary', ctrl.getMarketSummary);

module.exports = route;