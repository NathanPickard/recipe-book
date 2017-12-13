'use strict';

var mongoose = require('mongoose');

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MONGOLAB_URL);
}
else {
  mongoose.connect('mongodb://localhost/recipebook', function (err) {
    if (err) {
      console.log('Failed connecting to Mongodb!');
    } else {
      console.log('Successfully connected to Mongo!');
    }
  });
}