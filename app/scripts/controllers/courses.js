'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
  .controller('CoursesCtrl', function ($scope, $location, CoursesService) {
    $scope.loadCourses = function() {
      var courses = CoursesService.query(function() {
        $scope.courses = courses;
      });
    };
    $scope.deleteCourse = function(course) {
      course.$remove({id:course.id}, function() {
        $location.path( '/courses' );
        $scope.loadCourses();
      });
    };
    $scope.loadCourses();
  })
  .controller('CoursesShowCtrl', function ($scope, $routeParams, CoursesService) {
    $scope.course = CoursesService.get({ id: $routeParams.id });
  })
  .controller('CoursesNewController', function($scope, $location, CoursesService) {
    $scope.course = {};
    $scope.addCourse = function() {
      new CoursesService({course: $scope.course }).$save(function() {
        $location.path( '/courses' );
      });
    };
  }).controller('CoursesEditController', function($scope, $location, $routeParams, CoursesService) {
    $scope.updateCourse = function() {
      $scope.course.$update({id:$scope.course.id}, function(course, putResponseHeaders) {
        $location.path( '/courses' );
      });
    };
    $scope.loadCourse = function() {
      $scope.course = CoursesService.get({ id: $routeParams.id });
    };
    $scope.loadCourse();
  });
