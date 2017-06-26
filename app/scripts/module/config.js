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