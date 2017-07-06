'use strict';

var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: String,
  directions: String,
  completed: Boolean
});

var model = mongoose.model('Recipe', recipeSchema);

module.exports = model;