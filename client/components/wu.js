(function(){
  'use strict';

  angular.module('weather')
  .factory('wu', ['$http', function($http){

  function getUrl(service, zip){
   return 'http://api.wunderground.com/api/9b9842efc9926224/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK';
  }

  function getConditions(zip){
   var url = getUrl('conditions', zip);
   return $http.jsonp(url); //returns a promise
  }

  function getWebcams(zip){
   var url = getUrl('webcams', zip);
   return $http.jsonp(url); //returns a promise
  }

  function get10Day(zip){
    var url = getUrl('forecast10day', zip);
    return $http.jsonp(url);
  }

  //a sort of exporting for angular functions
  return {getConditions: getConditions, getWebcams: getWebcams, get10Day: get10Day};

  }]);
})();