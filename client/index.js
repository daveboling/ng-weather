(function(){
  'use strict';


  //without the second parameter is assums this module already exists
  angular.module('weather', ['ngRoute']) //ngRoute is injected inside of this module now
  .config(['$routeProvider', function($routeProvider){ //config for weather module
    $routeProvider
    .when('/conditions',{templateUrl: '/views/conditions/conditions.html',controller: 'ConditionsController'})
    .when('/webcams', {templateUrl: '/views/webcams/webcams.html', controller: 'WebcamsController'})
    .when('/forecast', {templateUrl: '/views/tenday/tenday.html', controller: 'TenDayController'})
    .otherwise({redirectTo:'/conditions'});//if not recognized URL, give me this one
  }])
  .controller('MainController',['$scope', function($scope){
    $scope.title = 'Weather';
  }]);
})();

