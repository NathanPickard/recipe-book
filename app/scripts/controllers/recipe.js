'use strict';

function RecipeCtrl($scope, dataService, $mdDialog) {

  $scope.showConfirm = function (ev) {
    var confirm = $mdDialog.confirm()
      .title('Are you sure you want to delete this recipe?')
      .textContent('This will delete the recipe')
      .ariaLabel('Confirm the recipe deletion')
      .targetEvent(ev)
      .ok('Yes, delete')
      .cancel('Do not delete');

    $mdDialog.show(confirm).then(function(){

      $scope.deleteRecipe = function (recipe, index) {
        $scope.recipes.splice(index, 1);
        dataService.deleteRecipe(recipe);
      }, function () {
      };
    });
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
    $scope.recipes.forEach(function (recipe) {
      recipe.edited = false;
    });
  }
}

module.exports = RecipeCtrl;