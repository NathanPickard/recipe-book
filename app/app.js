'use strict'

import 'angular-material/angular-material.css';

import angularMaterial from 'angular-material';

var angular = require('angular');

angular.module("recipeBookApp", [angularMaterial]);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');