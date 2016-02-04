/**
 * Created by zews on 28.01.2016.
 */
var versions = "end.js@1.0.11";

//localStorage.setItem('key', 'COM');
//   alert(localStorage.getItem('key'));

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

var queryStr = parseQueryString(window.location.search);
//  var someVar1 = queryStr['cmd']; // 111
 //   someVar2 = queryStr['luser'], // "foo"
//    someVar2 = queryStr['lpass']; // "bar"
//window.alert(queryStr['luser']);

//window.alert(queryStr['cmd']);

var sendObject = {
    status :  "OK",
    title:  "vkid",
    value:  vk.id
};

function LogOut(){
    $('#logout_link').trigger("click");
   // window.alert("QUIT");
      window.close();
   }

function WinClo(){
    window.close();
    }

function LogIn(){

    //  $("#email").val("+79538845740");
    $("#email").val(queryStr['luser']);
    $("#pass").val(queryStr['lpass']);
    //  $("#pass").val("!q22lesy13!%");
    $('#quick_login_button').trigger("focus");
    $('#login').submit();
//

    //$("title").html("Новье!")
}

//uri = "http://vk.com/login.php?cmd=login&luser=uwuwu&lpass=slls";

//cmd

switch (queryStr['cmd']) {
    case "login":
      //  window.alert(queryStr['lpass']);
        LogIn();
        break;
    case "quit":
      //  alert( 'В точку!' );
        LogOut();
        break;
      default:
      //  alert( 'Я таких значений не знаю' );
};

//

switch (vk.id) {
    case undefined:
        //  window.alert(undefined);
          break;
    case 0:
      //  window.alert( 'Ноль' );
        break;
    default:
       //   window.alert('Сработало');
          opener.postMessage(sendObject, '*');
          WinClo();
   };

alert( 'В точку!' );