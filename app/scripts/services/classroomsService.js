'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.services:ClassroomsService
 * @description
 * # ClassroomsService
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
.factory('ClassroomsService', function($resource, configuration) {
  return $resource(configuration.url + '/api/classrooms/:id.json', null,{
        'update': { method:'PUT' }
    });
});
