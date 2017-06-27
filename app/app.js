'use strict'

// import 'angular-material/angular-material.css';

// import ngMaterial from 'angular

import './scripts/module/index';
import './scripts/module/config';

import uirouter from 'angular-ui-router';

var angular = require('angular');


// var ngMaterial = require('angular-material');

angular.module("recipeBookApp", ['ngMaterial', 'module']);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');