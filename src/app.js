'use strict'

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var expressJwt = require('express-jwt');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

app.use('/api', router);

//routes
app.use('/login', require('./login.controller'));
app.use('/register', require('./register.controller'));
app.use('/api/users', require('./api/users.controller'));


app.listen(process.env.PORT || 3000, function() {
  console.log("The server is running on port 3000!");
});