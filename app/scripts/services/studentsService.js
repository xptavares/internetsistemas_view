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
  return $resource(process.env.BACK_END_URL + '/api/students/:id.json', null, {
        'update': { method:'PUT' }
    });
});
