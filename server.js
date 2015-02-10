// modules ======================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configuration ================================
// set our port
var port = process.env.port || 8080;

// get all data/stuff of the body parameters
// parse application/json
app.use(bodyParser.json());

// setup the static files path
app.use(express.static(__dirname + '/public'));

// routes =======================================
require('./app/routes')(app);

// start server =================================
// startup the server at http://localhost:8080
app.listen(port);

// expose app
exports = module.exports = app;
