(function () {
  'use strict';

  angular.module('module', [])
    .config(config);
    

    routing.$inject = ['$urlRouterProvider', '$locationProvider'];

    // export default function routing($urlRouterProvider, $locationProvider) {
    //   $locationProvider.html5Mode(true);
    //   $urlRouterProvider.otherwise('/');
    // }

  /*@ngInject*/
  function config($mdThemingProvider, $mdIconProvider) {

    $mdIconProvider.icon('home', '../svg/1-home.svg', 24);
    $mdIconProvider.icon('plate', '../svg/plate.svg', 24);


    // var paletteMap = $mdThemingProvider.extendPalette('amber', {
    //   'contrastDefaultColor': 'dark',
    //   'contrastDarkColors': ['50'],
    //   '50': 'ffffff'
    // });

    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue');
  }

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
            templateUrl: 'home.html',
            controller: '',
            controllerAs: 'vm'
      })
  }

  angular.module('module', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$logProvider',
      function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state('home', {
            url: '/',
                templateUrl: 'templates/home.html',
                controller: '',
                controllerAs: 'vm'
          })
      }])
})();