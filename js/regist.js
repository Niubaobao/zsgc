/**
 * Created by zhangyachao on 17/1/17.
 */
var regist=angular.module("regist",[]);
regist.controller("regist",["$scope","$http",function ($scope,$http) {
    $scope.newsubmit=function(){
    //
        $http.jsonp("http://182.92.175.36/users/register?callback=JSON_CALLBACK",{params:$scope.msg})
            .success(function (data) {
                // console.info(data);
                alert("注册成功");
                window.open(geturl(window.location.href)+"#/","_self");
            })
    }

}]);