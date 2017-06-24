'use strict';

var Recipe = require('./models/recipe.js');

var recipes = [
  'Baby back ribs',
  'Jamaican spice mix',
  'Cold brew coffee'
];

recipes.forEach(function (recipe, index) {
  Recipe.find({ 'name': recipe }, function (err, todos) {
    if (!err && !recipes.length) {
      Recipes.create({ name: recipe });
    };
  });
});