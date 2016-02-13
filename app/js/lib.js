/**
 * Created by zews on 01.02.2016.
 */
var versions = "lib.js@6.2.21";
//
function mytest(){
     return a;
};

    //
//

//new Date(year, month, date, hours, minutes, seconds, ms)
//
var md5 = require("nodejs-md5");
var uuid = require('node-uuid');
global.ID = uuid.v4();

//var uuid = require('node-uuid');
if (window.localStorage.getItem('userkey') == null) {
  //  window.alert(global.ID);
    window.localStorage.setItem('userkey', global.ID);
    window.localStorage.setItem("coutryLikeMe", "0");
    // создаем пользователя и аккаунты
}else {
    console.log(window.localStorage.getItem('userkey'));
    };

//login_sessions
window.sessionStorage.setItem('login_sessions', "LogIn");

var login_sessions = {
    status: window.sessionStorage.getItem('login_sessions')
};
//


//pin-code

var PinCode = {
    set: function(pin){
      window.localStorage.setItem("pin-code", pin)
    } ,

    get: function (){

             var pincode = window.localStorage.getItem("pin-code");
             return pincode ;
    },
    verify: function() {
           $.ajaxSetup({
                cache: false
                             });

        var que = "http://pin.texno-universal.ru/" + PinCode.get()+ ".json";
        //http://pin.texno-universal.ru/df1f066c-f385-4e77-a08f-c053b4a450e5.json
        $.getJSON(que,
                       function(data){
                //alert("Ваш пин код принят");
                 console.log(data);
                var salt = PinCode.vpc[data.versainPinCode];
                var signature =  md5.string.quiet(salt +  data.code);
                var sig1 = md5.string.quiet(salt +  data.activateData);
                var sig2 = md5.string.quiet(salt +  data.workData);
                signature = md5.string.quiet(signature+sig1+ sig2);
                console.log(signature);
                //

                switch (data.status) {
                    case "disable":
                        alert( "Ваш pin-cod требует активации" );
                        break;
                    case "error":
                        //
                        if ( PinCode.get()){
                            alert( "Указан неверный или не существующий pin-code" );
                        } else {
                          //  window.alert("!!!");
                                   }

                           $("#vkclose").hide();
                        break;
                    case "activate":
                        var VD = new Date();
                        VD.setDate(VD.getDate() - 30);
                        var endVD = VD.toJSON();
                        console.log(endVD);

                        if(endVD > data.activateData ){
                            alert( "Срок действия pin-cod'а закончился" );
                        }else {
                            if (data.signature == signature){
                             //  $("#vkclose").removeClass("hd");
                                $("#vkclose").show();
                            } else {
                                alert( "Указан неверный или не существующий pin-code" );
                               // $("#vkclose").addClass("hd");
                                $("#vkclose").hide();

                            }
                        }
                        break;
                    default:



                    //


                }
            });
        //

    },
    vpc: {
        "007":"11111",
        "009": "art96c053b4a450e5"
    }

}

//window.localStorage.setItem("pin-code", "df1f066c-f385-4e77-a08f-c053b4a450e5")
PinCode.verify();



//
console.log(window.sessionStorage.getItem('login_sessions'));
 if (login_sessions.status == "LogIn"){
    $("#b3").removeClass("hd");
    $("#b2").removeClass("hd");
    $("#likeme").removeClass("hd");
}

var power = "enable" ;

// Work

//modal powers
    function adus(name, login, pass) {
        var loga = name + "_l";
        var ps = name + "_p";
        window.localStorage.setItem(loga, login);
        window.localStorage.setItem(ps, pass);
        vu();

    }

    function Batuns(IdModal) {
        this.OpenModal = function () {

            $("#" + IdModal).addClass("md-show");
            $("#mdoverlay").addClass("md-show");
        }

        this.CloseModal = function () {

            $("#" + IdModal).removeClass("md-show");
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
// show:false,
    function openVK(uri) {
        wino = gui.Window.open (uri, {
            //  position: 'center',
            show: false,
            width: 450,
            height: 450,
            "toolbar": false,
            "inject-js-start": "js\\jquery-1.8.3.js",
            "inject-js-end": "js\\loginvk.js",
        });
    }

// show:false,
    function tokenVK() {
        var uri = "https://oauth.vk.com/authorize?client_id=5130857&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.45"
        tokens = gui.Window.open (uri, {
            //  position: 'center',
            width: 450,
            show: true,
            height: 450,
            "toolbar": true,
            "inject-js-start": "js\\jquery-1.8.3.js",
            "inject-js-end": ""
        });
    }

//
//

//serch ID
    $("#searchid").live("click", function () {
        openVk("http://vk.barkov.net/");
        $("#likemestart").addClass("poev");
        wino.on('closed', function () {
            //  window.alert("344");
            $("#likemestart").removeClass("poev");
        });

        //
    });
// читаем список ID
    function getIDList() {
        if (window.localStorage.getItem('listID') != null) {
            var numbers = window.localStorage.getItem('listID');
            numbers = JSON.parse(numbers);
            $("#adduseid").val(numbers);

        }
    };

// записываем список ID

    function setIDList() {
        // удаляем данные базы
        var lid = window.localStorage.getItem('listID');
        numbers = JSON.parse(lid);
        var arr = numbers.split("\n");
        arr.forEach(function (item, i, arr) {
            delete localStorage[item]
        });

        // записываем новые
        var str = JSON.stringify(idlist.adduseid.value);
        window.localStorage.setItem('listID', str);
    };

//randomtime
    function rndt() {
        var die = Math.floor(Math.random() * 3 + 1);
        // console.log(die);
        die = die * 10000;
        return die;

    };


//перебор списка ID
    function tclo() {
        setTimeout(tokens.close(), 90000000000);
    }

    function listidtop() {
        console.time('VK-elements');
        // VkRaa.oauth();

        var lid = window.localStorage.getItem('listID');
        window.localStorage.setItem("coutryLikeMe", "0")
        numbers = JSON.parse(lid);
        var arr = numbers.split("\n");
        window.localStorage.setItem("LikeMeStop", arr.length)
        arr.forEach(function (item, i, arr) {

            var die = Math.floor(Math.random() * 3 + 1);
            // console.log(die);
            die = die * 25000;
            // setTimeout(RAA(item), die);
            setTimeout(VkRaa.rqu(item), die);
            //   console.log(i + " " + item );
        });
        var date = new Date();
        var H = date.getHours();
        var M = date.getMinutes();
        var S = date.getSeconds();
        //  tclo();
        console.timeEnd('VK-elements');
        console.log("DATA-End " + H + ":" + M + ":" + S + " STOP-elements " + arr.length);
        // console.log(util.inspect(process.memoryUsage()));
    }


// user info
//https://api.vkontakte.ru/method/getProfiles?uids=36203173&fields=photo
// {"response":
// [
// {"uid":36203173,
// "first_name":"Ростислав",
// "last_name":"Гр",
// "photo":"http:\/\/cs627818.vk.me\/v627818173\/1a488\/FVSDbogcsAc.jpg"
// }
// ]}
//VK
//var req="https://api.vkontakte.ru/method/getProfiles?uids=36203173&fields=photo"
    /*
     var script = document.createElement('SCRIPT');

     script.src = "https://api.vk.com/method/users.get?user_id=66748&v=5.45&callback=callbackFunc";

     document.getElementsByTagName("head")[0].appendChild(script);
     foto
     //https://api.vk.com/method/photos.getById?&photos=109823187_383326739&v=5.45

     */
    /* объект для работы с запросами vk *.
     //https://oauth.vk.com/authorize?client_id=1&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.45&callback=callbackFunc
     */


    var VkRaa = {
        oauth: function () {
            tokenVK();
            //var sc =  "https://oauth.vk.com/authorize?client_id=5130857&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.45";
            //     console.log(toce);

        },
        uinf: "",
        luinf: "",
        rqu: function (reqid) {
            //   var req = "https://api.vk.com/method/getProfiles?user_id="+reqid+"&fields=photo,photo_200,photo_id&v=5.45&callback=callbackFunc";
            var req = "https://api.vk.com/method/getProfiles?user_id=" + reqid + "&fields=photo,photo_200,photo_id&v=5.45&callback=VkRaa.caalb";
            try {

                $.getScript(req);

            } catch (err) {
                // alert( "Ошибка: "+  reqid);
                console.log("err " + reqid)
            }

        },

        caalb: function (result) {
            try {
                //  $("#imglike").html("<img src=" + result.response[0].photo+" style='width: 200px'>");


                var uinf = {
                    lname: result.response[0].last_name,
                    fname: result.response[0].first_name,
                    pfoto: result.response[0].photo,
                    pfoto_id: result.response[0].photo_id,
                    likeme: "no"
                };
                var str = JSON.stringify(uinf);
                window.localStorage.setItem(result.response[0].id, str);
                var coutryLikeMe = window.localStorage.getItem("coutryLikeMe");
                coutryLikeMe++;
                window.localStorage.setItem("coutryLikeMe", coutryLikeMe);
                //"http://cs621925.vk.me/v621925161/34704/rjMxpe9sHEg.jpg"
                //{"lname":"Красников","fname":"Дмитрий","pfoto":"http://cs4228.vk.me/u127879/e_a84a5a00.jpg","likeme":"no"}
                console.log(coutryLikeMe + "  " + result.response[0].id);
                //  data_uin
                $("#imglike").html("<img class=img-info src=" + result.response[0].photo + ">");
                $("#data_uin").html("<h3>Получаем данные:<br/> #" + window.localStorage.getItem("coutryLikeMe") + "<br/> ID-" + result.response[0].id + "</h3>");

            } catch (err) {
                console.log(result.response[0].id + "  " + err)

            } finally {
                // alert("Спасибо!");

                if (coutryLikeMe == window.localStorage.getItem("LikeMeStop")) {
                    $("#imglike").html("");
                    $("#data_uin").html("<h3>Данные получены</h3>");
                    setTimeout(window.alert("LikeMe-Stop"), 1500);

                }
            }

        },

    }
//

//
    var user_list = ["cl_user", "user1", "user2", "user3", "user4", "user5"];
    var user = require('./js/users.js');
    user1 = new user.users("user1");
    user2 = new user.users("user2");
    user3 = new user.users("user3");

//user1.addUsers ("+79538845740", "!q22lesy13!%");
    function vu() {

//user1

        var user_string = "";
        user_string = user_string + user1.view();
        $("#user1-edit").live("click", function () {
            user1.edit();
        });
        $("#user1").live('click',
            function () {
                b3.CloseModal();
                openVK(user1.LogIn());
            }
        );

//user2

        user_string = user_string + user2.view();
        $("#user2-edit").live("click", function () {
            user2.edit();

        });

        $("#user2").live('click',
            function () {
                b3.CloseModal();
                openVK(user2.LogIn());
            }
        );

//use3

        user_string = user_string + user3.view();
        $("#user3-edit").live("click", function () {
            user3.edit();
        });
        $("#user3").live('click',
            function () {
                b3.CloseModal();
                openVK(user3.LogIn());
            }
        );


        $("#userlist").html(user_string);
    };
    vu();

//ообщение окон


    $(function () {
        $(window).on("message", function (e) {
            var data = e.originalEvent.data;
            console.log(data);
            if (data) {
                var str = 'Пришли неверные данные';

                if (data.title && data.value) {
                    str = 'Сообщение:' + data.status + data.title + '. Значение объекта:' + data.value;
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
    $(document).ready(function () {
        $("#txt").easyTooltip({
            xOffset: -200,
            yOffset: -20,
            useElement: "timerdata1",
        });
        $("#statusinfo").easyTooltip({
            xOffset: -10,
            yOffset: -25,
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
        key: "Alt+Ctrl+D",
        active: function () {
            console.log("Global desktop keyboard shortcut: " + this.key + " active.");
            devl();
        },
        failed: function (msg) {
            // :(, fail to register the |key| or couldn't parse the |key|.
            console.log(msg);
        }
    };

//end work

//
// Create a shortcut with |option|.
var shortcut = new gui.Shortcut(optionk);
function devl() {
    var de = prompt("Укажите код разработчика");
    if (de == "!qwerty"){
        win.showDevTools();
            }else ( window.alert("Доступ запрещен"))
}


// Register global desktop shortcut, which can work without focus.
gui.App.registerGlobalHotKey(shortcut);



console.log(versions);

