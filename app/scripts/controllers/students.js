'use strict';

/**
 * @ngdoc function
 * @name internetsistemasViewApp.controller:StudentsCtrl
 * @description
 * # StudentsCtrl
 * Controller of the internetsistemasViewApp
 */
 angular.module('internetsistemasViewApp')
   .controller('StudentsCtrl', function ($scope, $location, StudentsService) {
     $scope.loadStudents = function() {
       var students = StudentsService.query(function() {
         $scope.students = students;
       });
     };
     $scope.deleteStudent = function(students) {
       students.$remove({id:students.id}, function() {
         $location.path( '/students' );
         $scope.loadStudents();
       });
     };
     $scope.loadStudents();
   })
   .controller('StudentsShowCtrl', function ($scope, $routeParams, StudentsService) {
     $scope.student = StudentsService.get({ id: $routeParams.id });
   })
   .controller('StudentsNewController', function($scope, $location, StudentsService) {
     $scope.student = {};
     $scope.addStudent = function() {
       new StudentsService({student: $scope.student }).$save(function() {
         $location.path( '/students' );
       });
     };
   }).controller('StudentsEditController', function($scope, $location, $routeParams, StudentsService) {
     $scope.updateStudent = function() {
       $scope.student.$update({id:$scope.student.id}, function(students, putResponseHeaders) {
         $location.path( '/students' );
       });
     };
     $scope.loadStudent = function() {
       $scope.student = StudentsService.get({ id: $routeParams.id });
     };
     $scope.loadStudent();
   });
