"use strict";angular.module("internetsistemasViewApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ui.bootstrap.datetimepicker","services.config"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/classrooms/new",{templateUrl:"views/classrooms/new.html",controller:"ClassroomsNewController"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/students",{templateUrl:"views/students/index.html",controller:"StudentsCtrl",controllerAs:"students"}).when("/students/:id/show",{templateUrl:"views/students/show.html",controller:"StudentsShowCtrl"}).when("/students/new",{templateUrl:"views/students/new.html",controller:"StudentsNewController"}).when("/students/:id/edit",{templateUrl:"views/students/edit.html",controller:"StudentsEditController"}).when("/courses",{templateUrl:"views/courses/index.html",controller:"CoursesCtrl",controllerAs:"courses"}).when("/courses/:id/show",{templateUrl:"views/courses/show.html",controller:"CoursesShowCtrl"}).when("/courses/new",{templateUrl:"views/courses/new.html",controller:"CoursesNewController"}).when("/courses/:id/edit",{templateUrl:"views/courses/edit.html",controller:"CoursesEditController"}).otherwise({redirectTo:"/"})}]),angular.module("services.config",[]).constant("configuration",{url:"https://internetsistemas.herokuapp.com"}),angular.module("internetsistemasViewApp").controller("MainCtrl",["$scope","$location","ClassroomsService",function(a,b,c){a.loadClassrooms=function(){var b=c.query(function(){a.classrooms=b})},a.loadClassrooms(),a.deleteClassroom=function(b){b.$remove({id:b.id},function(){a.loadClassrooms()})}}]).controller("ClassroomsNewController",["$scope","$location","ClassroomsService","CoursesService","StudentsService",function(a,b,c,d,e){a.classroom={},a.loadCourses=function(){var b=d.query(function(){a.courses=b})},a.loadStudents=function(){var b=e.query(function(){a.students=b})},a.loadStudents(),a.loadCourses(),a.time=null,a.addClassroom=function(){new c({classroom:a.classroom}).$save(function(){b.path("/")})}}]),angular.module("internetsistemasViewApp").controller("AboutCtrl",function(){}),angular.module("internetsistemasViewApp").controller("CoursesCtrl",["$scope","$location","CoursesService",function(a,b,c){a.loadCourses=function(){var b=c.query(function(){a.courses=b})},a.deleteCourse=function(c){c.$remove({id:c.id},function(){b.path("/courses"),a.loadCourses()})},a.loadCourses()}]).controller("CoursesShowCtrl",["$scope","$routeParams","CoursesService",function(a,b,c){a.course=c.get({id:b.id})}]).controller("CoursesNewController",["$scope","$location","CoursesService",function(a,b,c){a.course={},a.addCourse=function(){new c({course:a.course}).$save(function(){b.path("/courses")})}}]).controller("CoursesEditController",["$scope","$location","$routeParams","CoursesService",function(a,b,c,d){a.updateCourse=function(){a.course.$update({id:a.course.id},function(a,c){b.path("/courses")})},a.loadCourse=function(){a.course=d.get({id:c.id})},a.loadCourse()}]),angular.module("internetsistemasViewApp").controller("StudentsCtrl",["$scope","$location","StudentsService",function(a,b,c){a.loadStudents=function(){var b=c.query(function(){a.students=b})},a.deleteStudent=function(c){c.$remove({id:c.id},function(){b.path("/students"),a.loadStudents()})},a.loadStudents()}]).controller("StudentsShowCtrl",["$scope","$routeParams","StudentsService",function(a,b,c){a.student=c.get({id:b.id})}]).controller("StudentsNewController",["$scope","$location","StudentsService",function(a,b,c){a.student={},a.addStudent=function(){new c({student:a.student}).$save(function(){b.path("/students")})}}]).controller("StudentsEditController",["$scope","$location","$routeParams","StudentsService",function(a,b,c,d){a.updateStudent=function(){a.student.$update({id:a.student.id},function(a,c){b.path("/students")})},a.loadStudent=function(){a.student=d.get({id:c.id})},a.loadStudent()}]),angular.module("internetsistemasViewApp").controller("NavigationCtrl",["$scope","$location",function(a,b){a.isCurrentPath=function(a){return b.path()==a}}]),angular.module("internetsistemasViewApp").factory("ClassroomsService",["$resource","configuration",function(a,b){return a(b.url+"/api/classrooms/:id.json",null,{update:{method:"PUT"}})}]),angular.module("internetsistemasViewApp").factory("StudentsService",["$resource","configuration",function(a,b){return a(b.url+"/api/students/:id.json",null,{update:{method:"PUT"}})}]),angular.module("internetsistemasViewApp").factory("CoursesService",["$resource","configuration",function(a,b){return a(b.url+"/api/courses/:id.json",null,{update:{method:"PUT"}})}]),angular.module("internetsistemasViewApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h1>Alexandre Tavares</h1> <p class="lead"> Github: <a ng-href="https://github.com/xptavares">xptavares</a><br> Linkedin: <a ng-href="https://www.linkedin.com/in/xptavares">xptavares</a><br> </p> </div>'),a.put("views/classrooms/_form.html",'<div class="form-group"> <label for="name" class="control-label col-lg-2">Course</label> <div class="col-lg-10"> <select ng-options="course.id as course.name for course in courses" ng-model="classroom.course_id" class="form-control" required> <option></option> </select> </div> </div> <div class="form-group"> <label for="description" class="control-label col-lg-2">Student</label> <div class="col-lg-10"> <select ng-options="student.id as student.name for student in students" ng-model="classroom.student_id" class="form-control" required> <option></option> </select> </div> </div> <div class="form-group"> <label for="status" class="control-label col-lg-2">entry_at</label> <div class="col-lg-10"> <datetimepicker ng-model="classroom.entry_at" date-format="yyyy/MM/dd" date-options="required"> </datetimepicker> </div> </div> <div class="form-group"> <div class="col-lg-offset-2 col-lg-10"> <input type="submit" class="btn btn-primary" value="Save" ng-disabled="fm.classroom.course_id.$invalid"> <a href="#/" class="btn btn-default">Cancel</a> </div> </div>'),a.put("views/classrooms/new.html",'<form class="form-horizontal" role="form" name="fm" ng-submit="addClassroom()"> <div ng-include="\'views/classrooms/_form.html\'"></div> </form>'),a.put("views/courses/_form.html",'<div class="form-group"> <label for="name" class="control-label col-lg-2">Name</label> <div class="col-lg-10"> <input type="text" ng-model="course.name" class="form-control" id="name"> </div> </div> <div class="form-group"> <label for="description" class="control-label col-lg-2">Description</label> <div class="col-lg-10"> <input type="text" ng-model="course.description" class="form-control" id="description"> </div> </div> <div class="form-group"> <label for="status" class="control-label col-lg-2">Status</label> <div class="col-lg-10"> <input type="number" ng-model="course.status" class="form-control" id="status"> </div> </div> <div class="form-group"> <div class="col-lg-offset-2 col-lg-10"> <input type="submit" class="btn btn-primary" value="Save"> <a href="#/courses" class="btn btn-default">Cancel</a> </div> </div>'),a.put("views/courses/edit.html",'<form class="form-horizontal" role="form" ng-submit="updateCourse()"> <div ng-include="\'views/courses/_form.html\'"></div> </form>'),a.put("views/courses/index.html",'<table class="table table-striped"> <thead> <tr> <th>name</th> <th>description</th> <th>status</th> <th>Actions</th> </tr> </thead> <tbody> <tr ng-repeat="course in courses"> <td>{{ course.name }}</td> <td>{{ course.description }}</td> <td>{{ course.status }}</td> <td> <a href="#/courses/{{course.id}}/show" class="btn btn-primary">View</a> <a href="#/courses/{{course.id}}/edit" class="btn btn-primary">Edit</a> <a class="btn btn-danger" ng-click="deleteCourse(course)">Delete</a> </td> </tr> </tbody> </table> <a href="#/courses/new" class="btn btn-primary">New</a>'),a.put("views/courses/new.html",'<form class="form-horizontal" role="form" ng-submit="addCourse()"> <div ng-include="\'views/courses/_form.html\'"></div> </form>'),a.put("views/courses/show.html",'<dl class="dl-horizontal"> <dt><strong>name:</strong></dt> <dd>{{course.name}}</dd> <dt><strong>description:</strong></dt> <dd>{{course.description}}</dd> <dt><strong>status:</strong></dt> <dd>{{course.status}}</dd> </dl> <a href="#/courses" class="btn btn-default">Cancel</a> <a href="#/courses/{{course.id}}/edit" class="btn btn-primary">Edit</a>'),a.put("views/main.html",'<table class="table table-striped"> <thead> <tr> <th>Course</th> <th>Student</th> <th>Entry at</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="classroom in classrooms"> <td><a href="#/students/{{classroom.course_id}}/show">{{ classroom.course }}</a></td> <td><a href="#/courses/{{classroom.student_id}}/show">{{ classroom.student }}</a></td> <td>{{ classroom.entry_at }}</td> <td> <a class="btn btn-danger" ng-click="deleteClassroom(classroom)">Delete</a> </td> </tr> </tbody> </table> <a href="#/classrooms/new" class="btn btn-primary">Nova Matricula</a>'),a.put("views/students/_form.html",'<div class="form-group"> <label for="name" class="control-label col-lg-2">Name</label> <div class="col-lg-10"> <input type="text" ng-model="student.name" class="form-control" id="name"> </div> </div> <div class="form-group"> <label for="description" class="control-label col-lg-2">Registre Number</label> <div class="col-lg-10"> <input type="text" ng-model="student.registre_number" class="form-control" id="description"> </div> </div> <div class="form-group"> <label for="status" class="control-label col-lg-2">Status</label> <div class="col-lg-10"> <input type="number" ng-model="student.status" class="form-control" id="status"> </div> </div> <div class="form-group"> <div class="col-lg-offset-2 col-lg-10"> <input type="submit" class="btn btn-primary" value="Save"> <a href="#/students" class="btn btn-default">Cancel</a> </div> </div>'),a.put("views/students/edit.html",'<form class="form-horizontal" role="form" ng-submit="updateStudent()"> <div ng-include="\'views/students/_form.html\'"></div> </form>'),a.put("views/students/index.html",'<table class="table table-striped"> <thead> <tr> <th>name</th> <th>registre_number</th> <th>status</th> <th>Actions</th> </tr> </thead> <tbody> <tr ng-repeat="student in students"> <td>{{ student.name }}</td> <td>{{ student.registre_number }}</td> <td>{{ student.status }}</td> <td> <a href="#/students/{{student.id}}/show" class="btn btn-primary">View</a> <a href="#/students/{{student.id}}/edit" class="btn btn-primary">Edit</a> <a class="btn btn-danger" ng-click="deleteStudent(student)">Delete</a> </td> </tr> </tbody> </table> <a href="#/students/new" class="btn btn-primary">New</a>'),a.put("views/students/new.html",'<form class="form-horizontal" role="form" ng-submit="addStudent()"> <div ng-include="\'views/students/_form.html\'"></div> </form>'),a.put("views/students/show.html",'<dl class="dl-horizontal"> <dt><strong>name:</strong></dt> <dd>{{student.name}}</dd> <dt><strong>registre_number:</strong></dt> <dd>{{student.registre_number}}</dd> <dt><strong>status:</strong></dt> <dd>{{student.status}}</dd> </dl> <a href="#/students" class="btn btn-default">Cancel</a> <a href="#/students/{{student.id}}/edit" class="btn btn-primary">Edit</a>')}]);