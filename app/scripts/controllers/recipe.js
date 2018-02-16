'use strict';

function RecipeCtrl($scope, dataService, $mdDialog, $mdToast) {


  // $scope.showConfirm = function (recipe, index, event) {
  //   var confirm = $mdDialog.confirm()
  //     .title('Are you sure you want to delete this recipe?')
  //     .textContent('This will delete the recipe')
  //     .ariaLabel('Confirm the recipe deletion')
  //     .targetEvent(event)
  //     .ok('Yes, delete')
  //     .cancel('Do not delete');

  //   $mdDialog.show(confirm).then(function() {

  $scope.deleteRecipe = function (recipe, index) {
    $scope.recipes.splice(index, 1);
    dataService.deleteRecipe(recipe);
    $mdToast.show(
      $mdToast.simple()
      .textContent('The awesome recipe has been deleted!!')
      .hideDelay(3000)
      .position('top right')
    )
  }

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