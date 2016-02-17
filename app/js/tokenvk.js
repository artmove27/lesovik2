/**
 * Created by zews on 17.02.2016.
 */
var parseQueryString = function (strQuery) {
    var i,
        tmp     = [],
        tmp2    = [],
        objRes   = {};
    if (strQuery != '') {
        tmp = (strQuery.substr(1)).split('&');
        for (i = 0; i < tmp.length; i += 1) {
            tmp2 = tmp[i].split('=');
            if (tmp2[0]) {
                objRes[tmp2[0]] = tmp2[1];
            }
        }
    }
    return objRes;
};


var queryStr = parseQueryString(window.location.href);
//  var someVar1 = queryStr['cmd']; // 111
//   someVar2 = queryStr['luser'], // "foo"
//    someVar2 = queryStr['lpass']; // "bar"
//window.alert(queryStr['access_token']);

window.alert(window.location.hash);
console.log(window.location.hash);

//window.sessionStorage.setItem("token_code", queryStr['code']);

var sendObject = {
    status :  "OK",
    title:  "token",
    value:  "adadasdasdasd"
};


//opener.postMessage(sendObject, '*');

//window.close();
