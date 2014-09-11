/* jshint camelcase: false */
(function(){
  'use strict';

  angular.module('weather')//Since this already exists, don't need to put second param
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Conditions';
    $scope.getConditions = function(){
      //var url = 'http://api.wunderground.com/api/9b9842efc9926224/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK'; 

      //jsonp is still a get request
      //?callback=JSON_CALLBACK on the end of the URL allows for this to work as a 
      //query string 


      //.then(success, failure)
      //if success, first function is called.
      //else failure is called

      //promise is a promise that you'll eventually get a response
      wu.getConditions($scope.zip).then(function(json){
        $scope.temp_f = json.data.current_observation.temp_f;
        $scope.icon = json.data.current_observation.icon_url;
        $scope.feels_like = json.data.current_observation.feelslike_f; 
        //debugger;
      });

    };


  }]);

})();