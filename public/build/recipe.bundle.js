webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_module_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_module_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_module_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_module_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_module_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_module_config__);


// import 'angular-material/angular-material.css';

// import ngMaterial from 'angular





var angular = __webpack_require__(0);


// var ngMaterial = require('angular-material');

angular.module("recipeBookApp", ['ngMaterial', 'module']);

__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(9);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import 'module';

// import 'module/modules/ng.core';
// import 'module/modules/ng.shared';
// import 'module/modules/public';
// import 'module/modules/pages';

angular.module('module', []);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function () {
  'use strict';

  angular.module('module')
    .config(config);

  /*@ngInject*/
  function config($mdThemingProvider) {
    var paletteMap = $mdThemingProvider.extendPalette('amber', {
      'contrastDefaultColor': 'dark',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });

    $mdThemingProvider.definePalette('customPalette', paletteMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('customPalette', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');

    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey');
  }
})();

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('recipeBookApp').service('dataService', __webpack_require__(6));

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('recipeBookApp').directive('recipe', __webpack_require__(8));

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('recipeBookApp').controller('mainCtrl', __webpack_require__(10));
angular.module('recipeBookApp').controller('recipeCtrl', __webpack_require__(11));

/***/ }),
/* 10 */
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
/* 11 */
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