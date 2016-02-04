'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.services:ClassroomsService
 * @description
 * # ClassroomsService
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
.factory('ClassroomsService', function($resource) {
  return $resource('http://localhost:3000/api/classrooms.json');
});
