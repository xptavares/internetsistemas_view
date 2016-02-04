'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.services:CoursesService
 * @description
 * # CoursesService
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
.factory('CoursesService', function($resource) {
  return $resource(process.env.BACK_END_URL + '/api/courses/:id.json', null,{
        'update': { method:'PUT' }
    });
});
