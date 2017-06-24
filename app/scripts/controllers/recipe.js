'use strict';

function RecipeCtrl($scope, dataService) {

  $scope.deleteRecipe = function (recipe, index) {
    $scope.recipes.splice(index, 1);
    dataService.deleteRecipe(recipe);
  };

  $scope.saveRecipes = function () {
    var filteredRecipes = $scope.recipes.filter(function (recipe) {
      if (recipe.edited) {
        return recipe
      };
    })
    dataService.saveRecipes(filteredRecipes)
      .finally($scope.resetRecipeState());
  };

  $scope.resetRecipeState = function () {
    $scope.recipes.forEach(function(recipe) {
      recipe.edited = false;
    });
  }
}

module.exports = RecipeCtrl;