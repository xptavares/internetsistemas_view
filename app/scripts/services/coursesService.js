'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.services:CoursesService
 * @description
 * # CoursesService
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
.factory('CoursesService', function($resource, configuration) {
  return $resource(configuration.url + '/api/courses/:id.json', null,{
        'update': { method:'PUT' }
    });
});
