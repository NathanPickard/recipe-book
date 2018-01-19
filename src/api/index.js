'use strict';

var express = require('express');
var Recipe = require('../models/recipe')

var router = express.Router();

router.get('/recipes', function (req, res) {
  Recipe.find({}, function (err, recipes) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ recipes: recipes });
  });
});

router.post('/recipes', function (req, res) {
  var recipe = req.body;
  Recipe.create(recipe, function (err, recipe) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'recipe': recipe, message: 'Recipe Created' });
  });
});

router.put('/recipes/:id', function (req, res) {
  var id = req.params.id;
  var recipe = req.body;
  if (recipe && recipe._id !== id) {
    return res.status(500).json({ err: "Ids don\'t match!" })
  }
  Recipe.findByIdAndUpdate(id, recipe, { new: true }, function (err, recipe) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'recipe': recipe, message: 'Recipe Updated' });

  });
});


router.delete('/recipes/:id', function(req, res) {
  var id = req.params.id;
  Recipe.findByIdAndRemove(id, function(err, result) {
    if(err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Recipe Deleted' });
  });
});

module.exports = router;