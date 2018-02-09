let bittrex = require('./config/bittrex');

module.exports = {

    market: async (req, res) => {

        // let markets = await bittrex.loadMarkets();

        // console.log(markets['BTC/USDT']);
        // for (let market of markets) {
        //     console.log(market);
        // }
        // bittrex.getmarkets((err, data) => {
        //     res.render('market', {
        //         data: data.result
        //     })
        // })
        res.render('index', {
            gender: "Male",
            date: Date.now()
        })
        //res.send('hello');
    },

    getMarketSummary: (req, res) => {
        bittrex.getmarketsummary({
            market: req.query.market
        }, (err, data) => {
            res.render('modals/market_summary', {
                layout: '',
                data: data.result[0]
            })
        })
    }

}