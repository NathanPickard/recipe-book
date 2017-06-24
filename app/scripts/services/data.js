'use strict';

function DataService($http, $q) {

  this.getRecipes = function (cb) {
    $http.get('/api/recipes').then(cb);
  };

  this.deleteRecipe = function(recipe) {
    if(!recipe._id) {
      return $q.resolve();
    }
    return $http.delete('/api/recipes/' + recipe._id).then(function() {
      console.log("The " + recipe.name + " recipe has been deleted!");
    });
  };

  this.saveRecipes = function(recipes) {
    var queue = [];
    recipes.forEach(function(recipe) {
      var request;
      if(!recipe._id) {
        request = $http.post('/api/recipes', recipe)
      } else {
        request = $http.put('/api/recipes/' + recipe._id, recipe).then(function (result) {
          recipe = result.data.recipe;
          return recipe;
        })
      };
      queue.push(request);
    });
    return $q.all(queue).then(function (results) {
      console.log("I saved " + recipes.length + " recipes");
    });
  };
}

module.exports = DataService;