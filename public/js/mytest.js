function mytest() {
    //document.write(a + 42);
    return a;
}

// общение между окнами

var sendObject = {
    title: 'Тестовое сообщение',
    value: 5000
};
//win1.postMessage(sendObject, '*');
//
$(function(){
    $(window).on("message", function(e) {
        var data = e.originalEvent.data;
        console.log(data);
        if (data) {
            var str = 'Пришли неверные данные';

            if (data.title && data.value) {
                str = 'Сообщение:' + data.title + '. Значение объекта:' + data.value;
            }

           // $('title').text(str);
            window.alert(str);

        }
    });
});

// файлы

var fs = require('fs');
fs.writeFile("./test.txt", "13!!!rertert435345", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Файл сохранен.");
    }
});

fs.readFile('./test.txt', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    window.console.log(data);
});


//vksdk
var VK = require('vksdk');
var vk = new VK({
    'appId'     : 5130857 ,
    'appSecret' : 'pV3lue7OxFVOlRH7qwtX',
    'language'  : 'ru',
    //'mode'      : 'sig'
});

function rua(uid) {
    vk.request('getProfiles', {'user_id': uid, 'fields': "photo,photo_200"});
    vk.on("done:getProfiles",function (_o) {
//done:getProfiles
        var uinfo_id = _o.response[0].id;
        //   window.localStorage.setItem('Uinfo_id', "");
        window.localStorage.setItem('Uinfo_id', uinfo_id);
        var uinfo_photo = _o.response[0].photo;
        //     window.localStorage.setItem('Uinfo_photo', "");
        window.localStorage.setItem('Uinfo_photo', uinfo_photo);
        //   var uinfo_first_name = _o.response[0].first_name;
        //    window.localStorage.setItem('Uinfo_first_name', uinfo_first_name);
        var uinfo_photo_200 = _o.response[0].photo_200;
        //     window.localStorage.setItem('Uinfo_photo_200', "");
        window.localStorage.setItem('Uinfo_photo_200', uinfo_photo_200);
        //console.log(uinfo_id);
        console.log( _o);
        //  $("#imglike").html(uinfo_id);
        $("#imglike").html("<img src=" + uinfo_photo +" style='width: 200px'>"+ uinfo_id +"<br/>");

    });
};

// Menu
var menuB = new gui.Menu({type: 'menubar'});
var submenu = new gui.Menu();

submenu.append(new gui.MenuItem({ label: 'Добавить список ID',
    click: function() {
        // alert('Привет! ID')
        fp();
    }
}));
submenu.append(new gui.MenuItem({ label: 'О программе',
    click: function() {
        alert('Привет!')
    }
}));

// submenu.removeAt(0);


menuB.append(new gui.MenuItem({
    label: 'First Menu',
    submenu: submenu
}));

gui.Window.get().menu = menuB;


//Notification
var options = {
    icon: "http://yourimage.jpg",
    body: "Here is the notification text"
};

var notification = new Notification("Notification Title",options);
notification.onclick = function () {
    document.getElementById("output").innerHTML += "Notification clicked";
}

notification.onshow = function () {
    // play sound on show
    myAud=document.getElementById("audio1");
    myAud.play();

    // auto close after 1 second
    setTimeout(function() {notification.close();}, 1000);
}
console.log(versions);

//localStorage
// Сохранение значения
localStorage.setItem("Ключ", "Значение");
// Получение значения
localStorage.getItem("Ключ");
// Удаление значения
localStorage.removeItem("Ключ");
// Очистка всего хранилища
localStorage.clear();
/// объект

function UserList(name) {
    this.name = name;

    this.lkey = function() {
        var lkey =  this.name + "_l";
        return lkey;
    };
    this.pkey = function(){
        var pkey =  this.name + "_p";
        return pkey;
    };
    this.login = function(log){
        if (!arguments.length) {

            var login = window.localStorage.getItem(this.lkey());
            return login;

        } else {

            window.localStorage.setItem(this.lkey(), log);
        }
    };
    this.pass = function(ps){
        if (!arguments.length) {

            var ps = window.localStorage.getItem(this.pkey());
            return ps;

        } else {

            window.localStorage.setItem(this.pkey(), ps);
        }

    };

};
///

var optionk = {
    key : "Ctrl+d",
    active : function() {
        console.log("Global desktop keyboard shortcut: " + this.key + " active.");
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

// If register |shortcut| successfully and user struck "Ctrl+Shift+A", |shortcut|
// will get an "active" event.

// You can also add listener to shortcut's active and failed event.
shortcut.on('active', function() {
    console.log("Global desktop keyboard shortcut: " + this.key + " active.");
});

shortcut.on('failed', function(msg) {
    console.log(msg);
});

// Unregister the global desktop shortcut.
//gui.App.unregisterGlobalHotKey(shortcut);

// Сохранение значения
localStorage.setItem("Ключ", "Значение")
// Получение значения
localStorage.getItem("Ключ")
// Удаление значения
localStorage.removeItem("Ключ")
// Очистка всего хранилища
localStorage.clear()

// Сохранение значения
localStorage["Ключ"] = "Значение"
// Получение значения
localStorage["Ключ"]
// Удаление значения
delete localStorage["Ключ"]


// Создадим следующий объект
var obj = { "foo": "bar", "array": [1, 2, 3] }

// Сериализуем его
var sObj = JSON.stringify(obj)
// После этого sObj принимает строковое значение {"foo":"bar","array":[1,2,3]}

// Запишем в localStorage с ключём object
localStorage.setItem("object", sObj)

// Обратимся к localStorage следующим образом
// Хранилище вернёт нашу сериализованную строку {"foo":"bar","array":[1,2,3]}
localStorage.object

// Получим наш сериализованный объект через API
// Одновременно преобразуем к обычному объекту JavaScript
var retObj = JSON.parse(localStorage.getItem("object"))
// В итоге объекты obj и retObj абсолютно одинаковы

//VK
function RAA(reqid){
    var req = "https://api.vk.com/method/getProfiles?user_id="+reqid+"&fields=photo,photo_200,photo_id&v=5.45&callback=callbackFunc";
    try {

        $.getScript(req);

    } catch (err){
        // alert( "Ошибка: "+  reqid);
        console.log("err "+ reqid )
    }

    //   $.getScript(req).onerror = function() {
    //      alert( "Ошибка: "+  reqid);

    // };
};


function callbackFunc(result) {
    // console.log(result);
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

    }catch(err) {
        console.log(result.response[0].id +"  "+ err)

    } finally {
        // alert("Спасибо!");

        if (coutryLikeMe == window.localStorage.getItem("LikeMeStop")) {
            $("#imglike").html("");
            $("#data_uin").html("<h3>Данные получены</h3>");
            setTimeout(window.alert("LikeMe-Stop"), 1500);

        }
    }

}

//MD5

var md5 = require("nodejs-md5");
// md5.string("Hello, world");
//var mm = md5.string.quiet("Hello, world");
//console.log(md5.string.reverse(mm));

//Date
//var D = new Date();
//D.setDate(D.getDate() + 30);
//var D = D.toJSON();
//console.log(D);
