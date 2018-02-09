require('dotenv').config();

let express = require('express');
let hbs = require('express-handlebars');
let helpers = require('handlebars-helpers')();
let path = require('path');
let db = require('./app/config/db');
let routes = require('./app/route');

let app = express();

app.use(express.static('public'));
app.set('views', path.join( __dirname + '/app/views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'app/views/layouts'),
    partialsDir: path.join(__dirname, 'app/views/partials'),
    defaultLayout: 'master'
}))

app.use('/', routes);

db.connect();
app.listen(process.env.PORT, () => {
    console.log('App started on http://locahost:'+process.env.PORT)
})