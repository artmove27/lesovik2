/**
 * Created by zews on 01.02.2016.
 */
var versions = "lib.js@4.1.8";
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
    // создаем пользователя и аккаунты
    window.localStorage.setItem('cl_user', "");
    window.localStorage.setItem('user1', 0);
    window.localStorage.setItem('user2', 0);
    window.localStorage.setItem('user3', 0);
    window.localStorage.setItem('user4', 0);
    window.localStorage.setItem('user5', 0);
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
        width: 450,
        height: 450,
        "inject-js-start": "js\\jquery-1.8.3.js",
        "inject-js-end": "js\\loginvk.js",
    });
}
//


//user_work


//
var user_list = ["cl_user","user1", "user2", "user3", "user4", "user5"];
var user = require('./js/users.js');
user1 = new user.users();
user1.name = user_list[1];
user2 = new user.users();
user2.name = user_list[2];
user1.addUsers ("+79538845740", "!q22lesy13!%");
//user2.addUsers ("+4542", "!gdgdfg!%");

//user1
var user_string = ""; //<li><a href=# id=user1>" + user1.getLogin();
//user_string  = user_string   + "</a>  <a href=# id=user1-edit class=editusers data-edit=user1>(Редактировать)</a></li>";
user_string = user_string + user1.view();
$("#user1-edit").live("click", function() {
    user1.edit();
    //$("input[name = login]").val(user1.getLogin());
  //  $("input[name = pass]").val(user1.getPass());
});
$("#user1").live('click',
    function() {
            b3.CloseModal();
            openVK(user1.LogIn());
    }
);

//user2

//user_string = user_string  + "<li><a href=# id=user2>" + user2.getLogin();
//user_string  = user_string   + "</a>  <a href=# id=user2-edit class=editusers data-edit=user2>(Редактировать)</a></li>";
user_string = user_string + user2.view();
$("#user2-edit").live("click", function(){
    user2.edit();
    //$("input[name = login]").val(user2.getLogin());
    //$("input[name = pass]").val(user2.getPass());
}) ;

$("#user2").live('click',
    function() {
        b3.CloseModal();
        openVK(user2.LogIn());
    }
);

//
$("#userlist").html(user_string);
//getLogin()
//getPass()
//добавить в #userlist
// <li><a href="логин вконтакте">User_login</a> / <a href ="edit">Редактировать</a></li>

//ообщение окон


$(function(){
    $(window).on("message", function(e) {
        var data = e.originalEvent.data;
        console.log(data);
        if (data) {
            var str = 'Пришли неверные данные';

            if (data.title && data.value) {
                str = 'Сообщение:'  + data.status + data.title + '. Значение объекта:' + data.value;
            }

                  sysstatus.useronline = data.status;
                  sysstatus.idvk = data.value;
                  sysstatus.barstatus = "Авторизован пользователь" + sysstatus.idvk;

                  // sysstatus.statusmsg.title = "";
                  // sysstatus.statusmsg.img = "";
                  // sysstatus.statusmsg.msg = "";
                  sysstatus.statusmsg.link = "http://vk.com";
                  sysstatus.setbar();

            //
        }
    });
});
// подсказки
// useElement: "statusmsg",
$(document).ready(function(){
    $("#txt").easyTooltip({
        xOffset : -200,
        yOffset :-20,
        useElement: "timerdata1",
    });
    $("#statusinfo").easyTooltip({
        xOffset : -10,
        yOffset :-25,
        useElement: "item3",
    });

    $("#ovk").easyTooltip({
        useElement: "item4"
    });
    $("#b3").easyTooltip({
        useElement: "item5"
    });
    $("a#link5").easyTooltip({
        useElement: "item5"
    });

    $("a#link6").easyTooltip({
        useElement: "item6"
    });

    $("a#link7").easyTooltip({
        useElement: "item7"
    });

    $("a#link8").easyTooltip({
        useElement: "item8"
    });

    $("a#link9").easyTooltip({
        useElement: "item9"
    });

});


//статус информер

//var timerId = setInterval(function() {
//alert( "тик" );
//  $("#statusinfo").html(sysstatus.barstatus);
//  statusBarInfo();
//},5000); //},50000);
//    $("#statusinfo").html(sysstatus.barstatus);
//},50000);


console.log(versions);
