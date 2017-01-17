/**
 * Created by zhangyachao on 17/1/16.
 */

var login=angular.module("login",[]);
login.controller("login",["$scope","$http",function ($scope,$http) {
    $scope.turnUrl=function(){
      window.open(geturl(window.location.href)+"#/regist","_self");
    };

    $scope.loginSubmit=function(){
        //首先验证不能为空
        if($scope.username==undefined||$scope.username.trim()==""){
            alert("用户名不能为空");
            return;
        }
        if($scope.password==undefined||$scope.password.trim()==""){
            alert("密码不能为空");
            return;
        }
        // 取数据
       var promis= $http.jsonp("http://182.92.175.36/users/login?callback=JSON_CALLBACK",{params:{"username":$scope.username,"password":$scope.password}});
        // console.info(promis);
        promis.success(function(data){
            // console.info(data);
            if(data.success){
                // alert(data.msg);
                var loginuser=data.dataInfo;

                window.sessionStorage.setItem("loginuser",JSON.stringify(loginuser));

                window.open(geturl(window.location.href)+"#/list","_self");
            }else{
                alert(data.msg);
            }

        });
        promis.error(function(){
            alert("发生未知的错误");
        })

    }

}]);