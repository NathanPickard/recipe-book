(function () {
  'use strict';

  angular
      .module('app')
      .factory('UserService', Service);

  function Service($http, $q) {
      var service = {};

      service.GetCurrent = GetCurrent;
      service.GetAll = GetAll;
      service.GetById = GetById;
      service.GetByUsername = GetByUsername;
      service.Create = Create;
      service.Update = Update;
      service.Delete = Delete;

      return service;
  }

})();