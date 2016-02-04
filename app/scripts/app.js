'use strict';

/**
 * @ngdoc overview
 * @name internetsistemasViewApp
 * @description
 * # internetsistemasViewApp
 *
 * Main module of the application.
 */
angular
  .module('internetsistemasViewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/classrooms/new', {
        templateUrl: 'views/classrooms/new.html',
        controller: 'ClassroomsNewController',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/students', {
        templateUrl: 'views/students/index.html',
        controller: 'StudentsCtrl',
        controllerAs: 'students'
      })
      .when('/students/:id/show', {
        templateUrl: 'views/students/show.html',
        controller: 'StudentsShowCtrl'
      })
      .when('/students/new', {
        templateUrl: 'views/students/new.html',
        controller: 'StudentsNewController'
      })
      .when('/students/:id/edit', {
        templateUrl: 'views/students/edit.html',
        controller: 'StudentsEditController'
      })
      .when('/courses', {
        templateUrl: 'views/courses/index.html',
        controller: 'CoursesCtrl',
        controllerAs: 'courses'
      })
      .when('/courses/:id/show', {
        templateUrl: 'views/courses/show.html',
        controller: 'CoursesShowCtrl'
      })
      .when('/courses/new', {
        templateUrl: 'views/courses/new.html',
        controller: 'CoursesNewController'
      })
      .when('/courses/:id/edit', {
        templateUrl: 'views/courses/edit.html',
        controller: 'CoursesEditController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
