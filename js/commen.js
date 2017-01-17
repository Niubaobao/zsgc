/**
 * Created by zhangyachao on 17/1/17.
 */
function geturl(path) {
    var path=window.location.href;
    if(path.indexOf("#/")!=-1){
        path = path.substring(0,path.indexOf("#/"));
    }
    return path;
}