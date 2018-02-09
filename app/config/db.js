const mongoose = require('mongoose');

let connect = () => {

    mongoose.connect(process.env.DB_CONNECTION_STRING)

}

mongoose.connection.on('open', () => {
    console.log('App connected to database.')
})

module.exports = {
    connect, mongoose
}