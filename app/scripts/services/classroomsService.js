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
  return $resource(process.env.BACK_END_URL + '/api/classrooms/:id.json', null,{
        'update': { method:'PUT' }
    });
});
