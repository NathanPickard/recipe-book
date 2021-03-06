'use strict'

// import 'angular-material/angular-material.css';

// import ngMaterial from 'angular

import './scripts/module/index';
import './scripts/module/config';
import uirouter from 'angular-ui-router';
// import routing from './scripts/module/config';

var angular = require('angular');

// var ngMaterial = require('angular-material');

angular.module("recipeBookApp", [
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'module',
  'ui.router']);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');