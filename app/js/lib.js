/**
 * Created by zews on 01.02.2016.
 */
var versions = "lib.js@4.0.5";
//
function mytest(){
     return a;
};

    //

var uuid = require('node-uuid');
global.ID = uuid.v4();

//var uuid = require('node-uuid');
if (window.localStorage.getItem('userkey') == null) {
  //  window.alert(global.ID);
    window.localStorage.setItem('userkey', global.ID);

}else {
    console.log(window.localStorage.getItem('userkey'));
    };

//exports.lls = lls;

// Work
//modal


function Batuns(IdModal){
    this.OpenModal = function (){

        $("#"+IdModal).addClass("md-show");
        $("#mdoverlay").addClass("md-show");
    }

    this.CloseModal = function(){

        $("#"+IdModal).removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");


        //...
    }

    //..
}
//
function openVk(uri) {
    wino = gui.Window.open (uri, {
        //  position: 'center',
        width: 900,
        height: 700,
          });
}
//
function openVK(uri) {
    wino = gui.Window.open (uri, {
        //  position: 'center',
        width: 900,
        height: 700,
        "inject-js-start": "js\\jquery-1.8.3.js",
        "inject-js-end": "js\\end.js",
    });
}
//

//user_work
var user_list = ["cl_user","user1", "user2", "user3", "user4", "user5"];
var user = require('./js/users.js');
user1 = new user.users();
user1.name = user_list[1];
user2 = new user.users();
user2.name = user_list[2];
//user1.addUsers ("+79538845740", "!q22lesy13!%");
//user2.addUsers ("+4542", "!gdgdfg!%");

//usr1
usr1 = user_list[1];
var user_string = "<li><a href=# id=user1>" + user1.getLogin();
user_string  = user_string   + "</a>  <a href=# id=edit>(Редактировать)</a></li>";
$("#user1").live('click',
    function() {
        $("#modal-3").removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
         openVK(user1.LogIn());
    }
);

//user2
user_string = user_string  + "<li><a href=# id=user2>" + user2.getLogin();
user_string  = user_string   + "</a>  <a href=# id=edit>(Редактировать)</a></li>";
$("#user2").live('click',
    function() {
        $("#modal-3").removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
        openVK(user2.LogIn());
    }
);

$("#userlist").html(user_string);
//getLogin()
//getPass()
//добавить в #userlist
// <li><a href="логин вконтакте">User_login</a> / <a href ="edit">Редактировать</a></li>

//сообщения с окон


$(function(){
    $(window).on("message", function(e) {
        var data = e.originalEvent.data;
        console.log(data);
        if (data) {
            var str = 'Пришли неверные данные';

            if (data.title && data.value) {
                str = 'Сообщение:'  + data.status + data.title + '. Значение объекта:' + data.value;
            }
            sysstatus.useronline = data.status ;
            sysstatus.idvk = data.value;
            window.alert(sysstatus.useronline + " " +sysstatus.idvk + " " + versions2 );
            sysstatus.barstatus = "Авторизован пользователь VKid " + sysstatus.idvk ;

            //
        }
    });
});
// подсказки


//статус информер

//var timerId = setInterval(function() {
    //alert( "тик" );
//    $("#statusinfo").html(sysstatus.barstatus);
//},50000);


console.log(versions);
