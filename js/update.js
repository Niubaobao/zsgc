/**
 * Created by zhangyachao on 17/1/17.
 */
var update=angular.module("update",[]);
update.controller("update",["$scope","$http","$location",function($scope,$http,$location){
    // console.info($location.absUrl());
    // console.info($location.url());
    // console.info($location.path());
    var temp=$location.absUrl().indexOf("=");
    if (temp==-1){
        window.open("list.html","_self");
        return;
    }
   // console.info($location.absUrl().substring($location.absUrl().indexOf("=")+1));
    var id = $location.absUrl().substring($location.absUrl().indexOf("=")+1);
    // 通过id的到用户对象
    $http.jsonp("http://182.92.175.36/users/load?callback=JSON_CALLBACK&id="+id)
        .success(function (data) {
            // console.info(data);
            $scope.msg=data.dataInfo;
        });
    $scope.updatesubmit=function(){
        $http.jsonp("http://182.92.175.36/users/update?callback=JSON_CALLBACK",{params:$scope.msg})
            .success(function (data) {
                // console.info(data.msg);
                if(data.success){
                    window.open("list.html","_self");
                }

            })
            .error(function () {
                alert("发生错误");
            })

    }

}]);