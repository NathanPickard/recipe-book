(function () {
  'use strict';

  angular.module('module')
    .config(config);

  /*@ngInject*/
  function config($mdThemingProvider, $mdIconProvider) {

    $mdIconProvider.icon('home', '../svg/1-home.svg', 24);

    // var paletteMap = $mdThemingProvider.extendPalette('amber', {
    //   'contrastDefaultColor': 'dark',
    //   'contrastDarkColors': ['50'],
    //   '50': 'ffffff'
    // });

    // $mdThemingProvider.definePalette('customPalette', paletteMap);

    // $mdThemingProvider.theme('default')
    // .primaryPalette('customPalette', {
    //   'default': '500',
    //   'hue-1': '50'
    // })
    // .accentPalette('pink');

    // $mdThemingProvider.theme('input', 'default')
    // .primaryPalette('grey');

    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('yellow');
  }



  // angular.module('module', ['ui.router'])
  //   .config(['$stateProvider', '$urlRouterProvider', '$logProvider',
  //     function config($stateProvider, $urlRouterProvider) {

  //       $urlRouterProvider.otherwise("/");

  //       $stateProvider
  //         .state('home', {
  //           url: '/',
  //           views: {
  //             '@': {
  //               templateUrl: 'templates/home.html'
  //             }
  //           }
  //         })
  //     }])
})();