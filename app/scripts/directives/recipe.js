'use strict';

function RecipeDirective() {
  return {
    templateUrl: 'templates/recipe.html',
    replace: true,
    controller: 'recipeCtrl'
  }
}

module.exports = RecipeDirective;