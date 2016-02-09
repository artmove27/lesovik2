/**
 * Created by zews on 01.02.2016.
 */
var versions = "lib.js@4.1.9";
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
}else {
    console.log(window.localStorage.getItem('userkey'));
    };
//login_sessions

var login_sessions = {
    status: 1,
};
//
//$.getJSON('http://texno-universal.ru/dm/st1s.json',
  //  function(data){
    //   alert("Ваш пин код принят");
  //       console.log(data.status);
 //       login_sessions.status = data.status;
       //
//    $("#b3").removeClass("hd");
//    $("#b2").removeClass("hd");
//    $("#likeme").removeClass("hd");
//    });
    //

//

 if (login_sessions.status == 1){
    $("#b3").removeClass("hd");
    $("#b2").removeClass("hd");
    $("#likeme").removeClass("hd");
}

//exports.lls = lls;

// Work
//modal
function adus(name, login, pass){
    var loga = name + "_l";
    var ps =  name + "_p";
    window.localStorage.setItem(loga, login);
    window.localStorage.setItem(ps, pass);
    vu();
   // location.reload();
}

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
        "toolbar": false,
       });
   }

//

function openVK(uri) {
    wino = gui.Window.open (uri, {
        //  position: 'center',
        width: 450,
        height: 450,
        "toolbar": false,
        "inject-js-start": "js\\jquery-1.8.3.js",
        "inject-js-end": "js\\loginvk.js",
    });
}
//

//serch ID
$("#searchid").live("click", function() {
    openVk("http://vk.barkov.net/");
    $("#likemestart").addClass("poev");
    wino.on('closed', function() {
      //  window.alert("344");
        $("#likemestart").removeClass("poev");
    });

      //
});



//

var user_list = ["cl_user","user1", "user2", "user3", "user4", "user5"];
var user = require('./js/users.js');
user1 = new user.users("user1");
user2 = new user.users("user2");
user3 = new user.users("user3");

//user1.addUsers ("+79538845740", "!q22lesy13!%");
function vu(){

//user1

var user_string = "";
user_string = user_string + user1.view();
$("#user1-edit").live("click", function() {
   user1.edit();
   });
$("#user1").live('click',
    function() {
            b3.CloseModal();
            openVK(user1.LogIn());
    }
);

//user2

user_string = user_string + user2.view();
$("#user2-edit").live("click", function(){
    user2.edit();

}) ;

$("#user2").live('click',
    function() {
        b3.CloseModal();
        openVK(user2.LogIn());
    }
);

//use3

    user_string = user_string + user3.view();
    $("#user3-edit").live("click", function() {
        user3.edit();
    });
    $("#user3").live('click',
        function() {
            b3.CloseModal();
            openVK(user3.LogIn());
        }
   );


    $("#userlist").html(user_string);
};
vu();

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
        useElement: "item4",

    });
    $("#b3").easyTooltip({
        useElement: "item5"
    });
  //  $("#closelikeme").easyTooltip({
  //      useElement: "item6"
  //  });

 //   $("a#link6").easyTooltip({
//        useElement: "item6"
//    });

  //  $("a#link7").easyTooltip({
 //       useElement: "item7"
 //   });

 //   $("a#link8").easyTooltip({
//        useElement: "item8"
 //   });

 //   $("a#link9").easyTooltip({
 //       useElement: "item9"
//    });

});


//статус информер

//var timerId = setInterval(function() {
//alert( "тик" );
//  $("#statusinfo").html(sysstatus.barstatus);
//  statusBarInfo();
//},5000); //},50000);
//    $("#statusinfo").html(sysstatus.barstatus);
//},50000);
// DevTools

//

var optionk = {
    key : "Alt+Ctrl+D",
    active : function() {
        console.log("Global desktop keyboard shortcut: " + this.key + " active.");
        win.showDevTools();
    },
    failed : function(msg) {
        // :(, fail to register the |key| or couldn't parse the |key|.
        console.log(msg);
    }
};

//
// Create a shortcut with |option|.
var shortcut = new gui.Shortcut(optionk);

// Register global desktop shortcut, which can work without focus.
gui.App.registerGlobalHotKey(shortcut);



console.log(versions);
