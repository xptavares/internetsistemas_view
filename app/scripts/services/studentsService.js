'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.services:StudentsService
 * @description
 * # StudentsService
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
.factory('StudentsService', function($resource, configuration) {
  return $resource(configuration.url + '/api/students/:id.json', null, {
        'update': { method:'PUT' }
    });
});
