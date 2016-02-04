'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the internetsistemasViewApp
 */
angular.module('internetsistemasViewApp')
  .controller('MainCtrl', function ($scope, ClassroomsService) {
    $scope.loadClassrooms = function() {
      var classrooms = ClassroomsService.query(function() {
        $scope.classrooms = classrooms;
        console.log(classrooms);
      });
    };
    $scope.loadClassrooms();
    $scope.deleteClassroom = function(classroom) {
      students.$remove({id: classroom.id}, function() {
        $location.path( '/students' );
        $scope.loadStudents();
      });
    };
  })
  .controller('ClassroomsNewController', function($scope, $location, ClassroomsService, CoursesService, StudentsService) {
    $scope.classroom = {};
    $scope.loadCourses = function() {
      var courses = CoursesService.query(function() {
        $scope.courses = courses;
      });
    };
    $scope.loadStudents = function() {
      var students = StudentsService.query(function() {
        $scope.students = students;
      });
    };
    $scope.loadStudents();
    $scope.loadCourses();
    $scope.addClassroom = function() {
      new ClassroomsService({classroom: $scope.classroom }).$save(function() {
        $location.path( '/' );
      });
    };
  });
