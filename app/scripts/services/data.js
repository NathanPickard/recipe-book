'use strict';

function DataService($http, $q) {

  this.getRecipes = function (cb) {
    $http.get('/')
  }
}