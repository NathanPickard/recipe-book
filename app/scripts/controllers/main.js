'use strict';

function MainCtrl($scope, $log, $interval, dataService) {
  
  dataService.getRecipes(function (res) {
    var recipes = res.data.recipes;
    $scope.recipes = recipes;
  });

  $scope.addRecipe = function() {
    $scope.recipes.unshift({
      name: "This is a new recipe.",
      completed: false
    });
  };
}

module.exports = MainCtrl;