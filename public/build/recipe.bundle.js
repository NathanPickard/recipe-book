webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module("recipeBookApp", []);

__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(7);

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('recipeBookApp').service('dataService', __webpack_require__(4));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('recipeBookApp').directive('recipe', __webpack_require__(6));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RecipeDirective() {
  return {
    templateUrl: 'templates/recipe.html',
    replace: true,
    controller: 'recipeCtrl'
  }
}

module.exports = RecipeDirective;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('recipeBookApp').controller('mainCtrl', __webpack_require__(8));
angular.module('recipeBookApp').controller('recipeCtrl', __webpack_require__(9));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
],[1]);