'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_hkf9sswk:du1fjgqf4a6pq2njtom5orndv5@ds135876.mlab.com:35876/heroku_hkf9sswk'))

// if (process.env.NODE_ENV == "production") {
//   mongoose.connect(process.env.MONGOLAB_URL);
// }
// else {
//   mongoose.connect('mongodb://localhost/recipebook', function (err) {
//     if (err) {
//       console.log('Failed connecting to Mongodb!');
//     } else {
//       console.log('Successfully connected to Mongo!');
//     }
//   });
// }