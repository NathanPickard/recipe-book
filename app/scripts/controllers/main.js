'use strict';

function MainCtrl($scope, $log, $interval, dataService) {

  dataService.getRecipes(function (res) {
    var recipes = res.data.recipes;
    $scope.recipes = recipes;
  });

  $scope.addRecipe = function () {
    $scope.recipes.unshift({
      name: "This is a new recipe.",
      completed: false
    });
  };


  $scope.orderList = "name";

}


// var vm = this;

// vm.orders = [
//   {
//     id: 1,
//     title: 'Name Ascending',
//     key: 'name',
//     reverse: false
//   },
//   {
//     id: 2,
//     title: 'Name Descending',
//     key: 'name',
//     reverse: true
//   }
// ];

// vm.order = vm.orders[0];

module.exports = MainCtrl;