/**
 * Created by zhangyachao on 17/1/17.
 */
var myapp=angular.module("myapp",["ngRoute","login","list","update","regist"]);
myapp.controller("mycon",["$scope",function($scope){}]);
myapp.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/regist",{
            "templateUrl":"regist.html"
        })
        .when("/",{
            "templateUrl":"login.html"
        })
        .when("/list",{
            "templateUrl":"list.html"
        })
        .when("/update",{
            "templateUrl":"update.html"
        })
        .otherwise({
            redirectTo:"/"
        })
}]);