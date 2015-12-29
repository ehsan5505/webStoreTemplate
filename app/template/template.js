
angular.module('ess.templates', ['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
    .when('/template',{
        templateUrl : 'template/template.html',
        controller : 'tempCntr'
    })
    .when('/template-detail/:id',{
        templateUrl:'template/template-detail.html',
        controller:'detailCntr'
    })
}])
.controller('tempCntr',['$scope','$http',function($scope,$http){
    // delete $http.defaults.headers.common['X-Requested-With'];
    
    $http.get("https://web-template-ehsan55051.c9users.io/app/json/temp.json").success(function(data){
        $scope.templates = data;
    })  
}])
.controller('detailCntr',['$scope','$http','$routeParams','$filter',function($scope,$http,$routeParams,$filter){
    $param = $routeParams.id;
    $http.get("https://web-template-ehsan55051.c9users.io/app/json/temp.json").success(function(data){
            $scope.template = $filter('filter')(data,function(d){
                return d.id == $param;
            })[0];
    console.log($scope.template);
    })
}])

// 'use strict';

// angular.module('ess.templates', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/template', {
//     templateUrl: 'template/template.html',
//     controller: 'TempCntr'
//   });
// }])

// .controller('TempCntr', [function() {

// }]);