/**
 * Created by zews on 01.02.2016.
 */
var versions = "lib.js@9.2.21";
//

    //
// конструктор базы
function alkomer(key){

    this.s =  function (val) {
        window.localStorage.setItem(key, val);
        // window.alert(key, val);
    };
    this.g = function () {
        var val = window.localStorage.getItem(key);
        return val;
    };
};

var indexlisid = new alkomer("listID");
var indexlikeid = new alkomer("index_like_id");

// конструктор сессионые данные
function lses(key){

      this.s =  function (val) {
        window.sessionStorage.setItem(key, val);
       // window.alert(key, val);
    };
    this.g = function () {
        var val = window.sessionStorage.getItem(key);
        return val;
    };
 };

var SES = new lses("token_vk");
SES.s("NON");
//window.alert(SES.g());

//login_sessions

var login_sessions = new lses('login_sessions');
login_sessions.s("Non");
//

var likys = new alkomer("like");
likys.s("stop");



//token

//var token =  new lses("token");
//token.s("NON");


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

                          // $("#vkclose").hide();
                            powerButon.hide();
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
                                powerButon.show();
                            } else {
                                alert( "Указан неверный или не существующий pin-code" );
                                                               powerButon.hide();

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

var powerButon = {

    show: function(){
        $("#vkclose").show();
        $("#b3").show();
        $("#likeme").show();
        $("#lcpan").show();
        $("#lkmstart").show();


        //
        $("#vkclose").removeClass("poev");
        $("#b3").removeClass("poev");
        $("#likeme").removeClass("poev");
        $("#lcpan").removeClass("poev");
        $("#lkmstart").removeClass("poev");
    },
    hide: function(){
        $("#vkclose").hide();
        $("#b3").hide();
        $("#likeme").hide();
        $("#lcpan").hide();
        $("#lkmstart").hide();
        //
        $("#vkclose").addClass("poev");
        $("#b3").addClass("poev");
        $("#likeme").addClass("poev");
        $("#lcpan").addClass("poev");
        $("#lkmstart").addClass("poev");
    }
}

//window.localStorage.setItem("pin-code", "df1f066c-f385-4e77-a08f-c053b4a450e5")
PinCode.verify();

//

// Work

//modal powers
    function adus(name, login, pass) {
        var loga = name + "_l";
        var ps = name + "_p";
        window.localStorage.setItem(loga, login);
        window.localStorage.setItem(ps, pass);
        vu();

    };

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
    };

//

function tokus() {
 wino = gui.Window.open ("http://texno-universal.ru/dm/out.php", {
        show: false,
    //    width: 900,
   //     height: 700,
        });
    //
}

//
    function openVk(uri) {
        wino = gui.Window.open (uri, {
            //  position: 'center',
            width: 900,
            height: 700,
          //  menu: menu,
            //
            });
          //
    }

//
// show:false,

function logoutVKi(uri) {
    lgo = gui.Window.open (uri, {
        //  position: 'center',
        show: true,
        width: 450,
        height: 450,
        "toolbar": false,
        "inject-js-start": "js\\jquery-1.8.3.js",
        "inject-js-end": "js\\logoutvk2.js",
    });
}

function logoutVK(uri) {
    lgo = gui.Window.open (uri, {
        //  position: 'center',
        show: false,
        width: 450,
        height: 450,
        "toolbar": false,
        "inject-js-start": "js\\jquery-1.8.3.js",
        "inject-js-end": "js\\logoutvk.js",
    });
}

    function openVK(uri) {
        wino = gui.Window.open (uri, {
            //  position: 'center',
            show: true,
            width: 450,
            height: 450,
            "toolbar": false,
            "inject-js-start": "js\\jquery-1.8.3.js",
            "inject-js-end": "js\\loginvk.js",

        });
    }

// show:false,
    function tokenVK(callback) {
               var uid = window.localStorage.getItem('userkey');
    //    var uri = "https://oauth.vk.com/authorize?client_id=5130857&display=mobile&redirect_uri=http://texno-universal.ru/dm/tkvk.php&scope=999999&response_type=token&v=5.45";
     //   var uri = "https://oauth.vk.com/authorize?client_id=5130857&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=999999&response_type=token&v=5.45";
      //    var uri = "https://oauth.vk.com/access_token?client_id=5130857&client_secret=pV3lue7OxFVOlRH7qwtX&redirect_uri=http://texno-universal.ru/dm/tkvk.php";
       var uri = "https://oauth.vk.com/authorize?client_id=5130857&display=mobile&redirect_uri=http://texno-universal.ru/dm/tkvk.php&scope=999999&response_type=token&v=5.45&state=";
        uri = uri + uid ;
        tokens = gui.Window.open (uri, {
            //  position: 'center',
            width: 450,
            show: false,
            height: 450,
            "toolbar": false,
            "inject-js-start": "js\\jquery-1.8.3.js",
            "inject-js-end": "js\\token.js"
        }
        );
        if(callback) {
            callback();
        }
    }

//
// show:false,
var lkvk ;
function lkVK(urii) {
    var uri = "http://vk.com/id" + urii;
    lkvk = gui.Window.open (uri, {
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

//serch ID
    $("#searchid").live("click", function () {
        openVk("http://vk.barkov.net/");
        $("#likemestart").addClass("poev");
        $("#searchid").addClass("poev");
        wino.on('closed', function () {

            $("#searchid").removeClass("poev");
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

        var lid = window.localStorage.getItem('listID');
        if(lid == !null){
            // удаляем данные базы
           // numbers = JSON.parse(lid);
            var arr = numbers.split("\n");
            arr.forEach(function (item, i, arr) {
                delete localStorage[item]
            });

        }

        // записываем новые
        var str = JSON.stringify(idlist.adduseid.value);
        window.localStorage.setItem('listID', str);
    };

//randomtime
    function rndt() {
        var die = Math.floor(Math.random() * 3 + 1);
        die = die * 10000;
        return die;

    };


//перебор списка ID
    function tclo() {
        setTimeout(tokens.close(), 90000000000);
    }

    function listidtop() {
      //  console.time('VK-elements');
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
               setTimeout(VkRaa.rqu(item), die);
            //   console.log(i + " " + item );
        });
        var date = new Date();
        var H = date.getHours();
        var M = date.getMinutes();
        var S = date.getSeconds();
        //  tclo();
      //  console.timeEnd('VK-elements');
        console.log("DATA-End " + H + ":" + M + ":" + S + " STOP-elements " + arr.length);
        // console.log(util.inspect(process.memoryUsage()));
    }



// user info
    /* объект для работы с запросами vk *.
     //https://oauth.vk.com/authorize?client_id=1&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.45&callback=callbackFunc
     */


    var VkRaa = {
        oauth: function() {
            tokenVK();
            //var sc =  "https://oauth.vk.com/authorize?client_id=5130857&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.45";
                     // var req = "https://oauth.vk.com/access_token?client_id=5130857&client_secret=pV3lue7OxFVOlRH7qwtX&" +
          //     "redirect_uri=https://oauth.vk.com/blank.html&scope=999999&v=5.45";
        //    https://oauth.vk.com/authorize?client_id=5130857&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=code&v=5.45
            //запрос
            //https://oauth.vk.com/authorize?client_id=5130857&display=page&redirect_uri=http://texno-universal.ru/dm/token.php&scope=999999&response_type=code&v=5.45
           // setTimeout(tokus();, 5000);


        },
        uinf: "",
        token_vk: function() {

            },


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
             //   console.log(coutryLikeMe + "  " + result.response[0].id);
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

        }

    };
//

//
    var user_list = ["cl_user", "user1", "user2", "user3", "user4", "user5"];
    var user = require('./js/users.js');

    user1 = new user.users("user1");
    user2 = new user.users("user2");
    user3 = new user.users("user3");
function userReLogIn(callback){

    if(login_sessions.g()== "LogIn"){
        logoutVK("http://vk.com/feed?cmd=quit");
    }
    if(callback) {
        callback();
    }

}

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
                console.log(user1.LogIn());
               openVK(user1.LogIn());
             //   VkRaa.oauth();
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
                console.log(user2.LogIn());
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
                console.log(user3.LogIn());
                openVK(user3.LogIn());
            }
        );


        $("#userlist").html(user_string);
    };
    vu();

//общение окон


    $(function () {
        $(window).on("message", function (e) {
            var data = e.originalEvent.data;
            console.log(data);
            if (data) {
                    var str = 'Пришли неверные данные';
                if (data.title && data.value) {
                    str = 'Сообщение:' + data.status + data.title + '. Значение объекта:' + data.value;
                }
                 //
                switch (data.title) {
                    case "vkid":
                       //
                        if(data.status == "OK"){
                           // window.alert("!!!!!!!!")

                        sysstatus.useronline = data.status;
                        sysstatus.idvk = data.value;
                        sysstatus.barstatus = "Авторизован пользователь" + sysstatus.idvk;

                        // sysstatus.statusmsg.title = "";
                        // sysstatus.statusmsg.img = "";
                        // sysstatus.statusmsg.msg = "";
                        sysstatus.statusmsg.link = "http://vk.com";
                        sysstatus.setbar();

                        //
                              wino.close();
                            login_sessions.s("LogIn");
                             VkRaa.oauth();

                        }else {
                            wino.close();
                        }
                        break;
                        //

                    case "token":
                           SES.s(data.value);
                          //  wino.close();
                        break;
                    case "logout":

                        if(data.status == "OK"){

                            sysstatus.useronline = "off";
                            sysstatus.idvk = data.value;
                            sysstatus.barstatus = "LogOut VK";

                            // sysstatus.statusmsg.title = "";
                            // sysstatus.statusmsg.img = "";
                            // sysstatus.statusmsg.msg = "";
                            sysstatus.statusmsg.link = "http://vk.com";
                            sysstatus.setbar();

                            //
                            SES.s("NON")
                            login_sessions.s("LogOut");
                            lgo.close();

                        }else {
                            lgo.close();

                        }
                    case "liky":
                         if(data.status == "OK") {
                             console.log(data);
                              likys.s(data.value);
                         }
                        //
                        break;
                    default:

                    //  alert( 'Я таких значений не знаю' );
                };

                //


            }
        });
    });
// подсказки
// useElement: "statusmsg",
    $(document).ready(function () {

        /*
        $("#txt").easyTooltip({
            xOffset: -200,
            yOffset: -20,
            useElement: "timerdata1",
        });
*/

        $("#statusinfo").easyTooltip({
            xOffset: -10,
            yOffset: -25,
            useElement: "item3",
        });

    /*
        $("#ovk").easyTooltip({
            useElement: "item4",

        });
        $("#b3").easyTooltip({
            useElement: "item5"
        });
   */
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
//table
 //      {
//                   $("#myTable").tablesorter({
 //             widgets:['zebra'],
 //              debug:false,
 //               widthFixed:true
 //          }).tablesorterPager({
  //              size:10,
 //               container:$('#pager'),
  //             positionFixed:false,
          //     page:0,
    //           cssNext:'.next',
     //           cssPrev:'.prev',
       //         cssPrev:'.first',
         //       cssPrev:'.last',
     //      });
    //    }


    });

//likemer



//



var likimer = {
    id: "",
    //
    dt: function(){
        var dat = window.localStorage.getItem(likimer.id);
        var info = JSON.parse(dat);
        return info;
    },
    view: function(){
        //
        var listid = window.localStorage.getItem('listID');
        var  numbers = JSON.parse(listid);
         var arr = numbers.split("\n");
            arr.forEach(function (item, i, arr) {
                 if (item ==""){
                    console.log("Noitem");
                    var linetr = "<tr><td>NoData</td>" +
                        "<td>NoData</td>" +
                        "<td>NoData</td>" +
                        "<td>NoData</td></tr>";
                    $("#listd").append(linetr);

                } else {

                    likimer.id = item;

                    var ima = "./images/right-titlebar.png";
                     var lmsg ="Лайк еще не поставлен";
                     var il = "NoLike";
                    // likimer.dt().likeme = "yes";
                     if (likimer.dt().likeme == "yes" ) {
                        //   var ima = "./images/right-titlebar.png";
                        ima = "./images/top-titlebar.png";
                         lmsg ="Мы его Лайкнули";
                         il = "Like";
                    }

                    // background="+likimer.dt().pfoto+" style='vertical-align: bottom'
                    var linetr = "<tr  class=userinfo"+item+"><td class='item'><img src=" + ima + " alt="+il +"> "+il+"</td>" +
                        "<td id=id"+item+" class=listusers style='vertical-align: middle'>" + likimer.id + "</td>" +
                        "<td  class="+item+" style='vertical-align: middle'>" + likimer.dt().lname + "</td>" +
                        "<td class="+item+" style='vertical-align: middle'>" + likimer.dt().fname + "</td></tr>";
                    //{"lname":"Novozhilov","fname":"Koluy","pfoto":"http://cs627116.vk.me/v627116267/270ec/LY8CtBbX29c.jpg","pfoto_id":"111988267_388018995","likeme":"no"}

                    $("#listd").append(linetr);
                 //    $("#myTable").ready(function () {
                 //        $(".userinfo"+item).easyTooltip({
                  //           tooltipId: "easyTooltip2",
                  //           content: "<img src="+ likimer.dt().pfoto +"><h3>"+ likimer.dt().lname +" "+likimer.dt().fname +"</h3>" +
                  //           "<p><img src="+ima+">"+lmsg +"</p>"

                 //    })

                   //    });
                     //
                     $("#id"+item).on("click", function(){
                         var uri =  "http://vk.com/id"+item ;
                         openVk(uri);
                     });
               }
                }
            );
    },
    clear: function(){
        $(".listusers").off();
    //    $("#myTable").unbind("ready");
            $("#listd").empty();
    },
    //
    sort: function(){

            likimer.clear();
           likimer.view();
              //table

        $("#myTable").ready(function () {
            $("#myTable").tablesorter({
                widgets: ['zebra'],
                debug: false,
                widthFixed: true
            }).tablesorterPager({
                size: 10,
                container: $('#pager'),
               positionFixed: false,
           });
            //

            });

            //

    },
    fotolikes2: function(){

        //https://api.vk.com/method/likes.add?type=photo&owner_id=USERID&item_id=PHOTOID&access_token=TOKEN&v=5.21
      //  window.alert("START");
       if(login_sessions.g() == "LogIn") {
           //
           var tokensu = SES.g();
           console.log(tokensu);
       var listid = window.localStorage.getItem('listID');
           var  numbers = JSON.parse(listid);
           var arr = numbers.split("\n");
             arr.forEach(function (item, i, arr){

                 //
                     likimer.id = item;
               var listuser = likimer.dt();
                 console.log(listuser.pfoto_id + " " + item);
              //   {"lname":"Перснев","fname":"Иван","pfoto":"http://cs605729.vk.me/v605729022/4ea8/6kG_UNXCcMQ.jpg","pfoto_id":"57009022_327777542","likeme":"no"}
                 var req = "https://api.vk.com/method/likes.add?type=photo&owner_id="+item+"&item_id="+listuser.pfoto+"&access_token=" + tokensu +"&v=5.21&callback=likimer.callb";
                 $.get(req);
                 console.log(req);
          // var req = "https://api.vk.com/method/likes.add?type=photo&owner_id=170597960&item_id=170597960_402144690&access_token="9257f31037f3c9cadffa0bc1355d1127ab50171cb90504986e0f14acae13a58934ca05dbdc8744cfc5721"&v=5.21";
           });




       } else {

           var autoriz = confirm("Требуется авторизация. Хотите автоизоваться сейчас?");
              if(autoriz){
                  logoutVK("http://vk.com/feed?cmd=quit");
                  $("#pcm").slideUp();
                  b3.OpenModal();

              }

         }


    },
    //
    fotolikes: function(){

        //https://api.vk.com/method/likes.add?type=photo&owner_id=USERID&item_id=PHOTOID&access_token=TOKEN&v=5.21
        //  window.alert("START");
        if(login_sessions.g() == "LogIn") {
            //

            var tokensu = SES.g();
            console.log(tokensu);
             //
            likys.s("next");
            var uri = "tw.html";
            //   window.open(uri, "likee");
            likeris =  gui.Window.open (uri, {
                //  position: 'center',
                id: "LiK",
                width: 540,
                show: true,
                height: 650,
                "toolbar": false,
                resizable: false,
                "frame": false,
                "nodejs": true,
                "fullscreen": false,
                "inject-js-start": "js\\jquery-1.8.3.js",
                "inject-js-end": "js\\lykeme.js"

            });
            $("#likeme").addClass("poev");
            $("#lkmstart").addClass("poev");
            likeris.on('closed', function () {

                $("#likeme").removeClass("poev");
                $("#lkmstart").removeClass("poev");
            });


        } else {

            var autoriz = confirm("Требуется авторизация. Хотите автоизоваться сейчас?");
            if(autoriz){
                logoutVK("http://vk.com/feed?cmd=quit");
                ModalPanel.del();
                $("#pcm").slideUp();
                setTimeout(  b3.OpenModal(), 2000);


            }

        }


    },


    //
    callb: function(data){

        console.log(data);
    },

    ftokenus: function(){
        //
        var tokensu = SES.g();
        if(login_sessions.g() == "LogIn") {

            if(tokensu == "NON" || tokensu == "error"){
                tokus();
            }
        }

    }
    //

};

//
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
    if (de == "!ArtMove%"){
        win.showDevTools();
            }else ( window.alert("Доступ запрещен"))
}


// Register global desktop shortcut, which can work without focus.
gui.App.registerGlobalHotKey(shortcut);



console.log(versions);

