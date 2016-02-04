'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.services:StudentsService
 * @description
 * # StudentsService
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
.factory('StudentsService', function($resource) {
  return $resource('http://localhost:3000/api/students/:id.json', null, {
        'update': { method:'PUT' }
    });
});
