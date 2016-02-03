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

//user1
var user_string = "<li><a href=# id=user1>" + user1.getLogin();
user_string  = user_string   + "</a>  <a href=# id=user1-edit>(Редактировать)</a></li>";
$("#user1").live('click',
    function() {
        $("#modal-3").removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
         openVK(user1.LogIn());
    }
);
//user1-edit
$("#user1-edit").live('click',
    function() {
        $("#modal-3").removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");

    }
);
//user2
user_string = user_string  + "<li><a href=# id=user2>" + user2.getLogin();
user_string  = user_string   + "</a>  <a href=# id=user2-edit>(Редактировать)</a></li>";
$("#user2").live('click',
    function() {
        $("#modal-3").removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
        openVK(user2.LogIn());
    }
);

//user2-edit
$("#user2-edit").live('click',
    function() {
        $("#modal-3").removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");

    }
);

//
$("#userlist").html(user_string);
//getLogin()
//getPass()
//добавить в #userlist
// <li><a href="логин вконтакте">User_login</a> / <a href ="edit">Редактировать</a></li>

//ообщение с окон


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
            window.alert(sysstatus.barstatus);
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

    $("a#link3").easyTooltip({
        useElement: "item3"
    });
    $("a#link4").easyTooltip({
        useElement: "item4"
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
