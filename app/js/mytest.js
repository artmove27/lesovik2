function mytest() {
    //document.write(a + 42);
    return a;
}
//<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />

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
    'mode'      : 'sig'
});


vk.request('users.get', {'user_id' : 251288914});
vk.on('done:users.get', function(_o) {
    console.log(_o);
});

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