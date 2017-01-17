/**
 * Created by zhangyachao on 17/1/16.
 */
var lists=angular.module("list",[]);
lists.controller("list",["$scope","$http",function($scope,$http){


    $scope.currentTime=new Date();
    setInterval(function(){
        $scope.$apply(function () {
            $scope.currentTime=new Date();
        })

    },1000);
    $scope.logout=function(){
        var isTrue=confirm("您确定要推出吗");
        if(isTrue){
            // 清楚数据
            window.open(geturl(window.location.href)+"#/","_self");
            return;
        }
    };
    var loginUser=JSON.parse(window.sessionStorage.getItem("loginuser"));
    if(!loginUser){
        alert("请先登陆");
        window.open(geturl(window.location.href)+"#/","_self");
        return;
    }
    $scope.username=loginUser.username;

    var promise=$http.jsonp("http://182.92.175.36/users/list?callback=JSON_CALLBACK");
    promise.success(function(data){
        $scope.lists=data.dataInfo;
    });
    promise.error(function(){
        alert("发生错误");
    });
    $scope.deleteData=function(id,e){
        var isTrue=confirm("你确定要删除数据吗");
        if(isTrue){
            // 发送ajax请求去删除数据
            var promise=$http.jsonp("http://182.92.175.36/users/delete?callback=JSON_CALLBACK&id="+id);
            promise.success(function(data){
                        if(data.success){
                            $scope.lists.splice(getIndex(id),1);
                        }else {
                            alert(data.msg);
                        }
            })
            promise.error(function(){
                alert("错误");
            })
        }
    };
    $scope.updata=function(id){
        window.open(geturl(window.location.href)+"#/update?id="+id,"_self");
    };
    // 根据id获取index的索引
    function getIndex(id){
        var index=-1;
        angular.forEach($scope.lists,function (item,key) {
            // console.info(item);
            // console.info(key);
            if(item.id==id){
                index=key;
            }
                return index;
        })


    }


}]);