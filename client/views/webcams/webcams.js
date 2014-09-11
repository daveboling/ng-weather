/* jshint camelcase: false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Webcams';
    $scope.getCams = function(){
      //var url = 'http://api.wunderground.com/api/9b9842efc9926224/webcams/q/' + $scope.zip + '.json?callback=JSON_CALLBACK'; 
      
      wu.getWebcams($scope.zip).then(function(json){
        $scope.images = json.data.webcams.map(function(cam){
          return cam.CURRENTIMAGEURL;
        });
      });

    };


  }]);

})();