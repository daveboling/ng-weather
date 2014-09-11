/* jshint camelcase: false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('TenDayController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Forecast 10 Day';
    $scope.get10Day = function(){
      //var url = 'http://api.wunderground.com/api/9b9842efc9926224/webcams/q/' + $scope.zip + '.json?callback=JSON_CALLBACK'; 
      
      wu.get10Day($scope.zip).then(function(json){
        $scope.forecast = json.data.forecast.simpleforecast.forecastday;
      });

    };


  }]);

})();