/**
 * Created by zews on 01.02.2016.
 */
console.time('Start-APP');
var versions2 = "app.js@7.3.20"
//


window.onerror = function(message, url, lineNumber) {
    alert("Поймана ошибка, выпавшая в глобальную область!\n" +
       "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
};

//
// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
global.window = window
// Global
//
global.gui = gui;
var win = gui.Window.get(); //окно
global.jQuery = jQuery;
var gui = require('nw.gui');


//splash
//win.resizeTo(100, 100);

//alert("asdasd");
//

var sysstatus = global.sysstatus;
var versions = "LesoViK v.a8.0.10";
 sysstatus = {
    useronline: "Off",
    idvk : 0,
    processstatus: "Free",
    barstatus: "",
    statusmsg: {
        title: versions,
        msg: "Ваш бизнес Вконтакте",
        img: "./icons/icon-64.png",
        link: "",
    },
    setbar: function(){
        $("#statusinfo").html(sysstatus.barstatus);

        var message = "";

        if (sysstatus.statusmsg.title) {
            message = message + "<h3>" + sysstatus.statusmsg.title + "</h3>";
        }
        if (sysstatus.statusmsg.img){
            message = message + "<img src=" + sysstatus.statusmsg.img + ">";
        };
        if (sysstatus.statusmsg.msg){
            message = message + "<p>" + sysstatus.statusmsg.msg + "</p>";
        };
        $("#item3").html(message);
        if(sysstatus.statusmsg.link) {
            $("#statusinfo").attr({"href": sysstatus.statusmsg.link, "target":"_blank"});
        } else {
            $("#statusinfo").attr("href","#");
        };
    },


};

sysstatus.barstatus = versions;
sysstatus.setbar();


//gui.Shell(); //оболочка
//gui.Tray // трей
//gui.Clipboard // буффер обмена//
//gui.Shortcut // сочетания клавиш

//server-echo

console.log("Start Init");

//lib
require('nw.gui').Window.get().evalNWBin(null, './js/lib.bin');
require('nw.gui').Window.get().evalNWBin(null, './js/gui2.bin');
//require('./js/lib.js');
//require('./js/gui2.js');
//<script src="./js/_gui2.js"></script>
const util = require('util');
//старотвые установки
//модули программы bin
//require('nw.gui').Window.get().evalNWBin(null, './js/mytest.bin');

//GUI
//menu
var menu = new gui.Menu();
var submenu = new gui.Menu();
menu.append(new gui.MenuItem({ label: 'Обновить',
   click: function() {
    win.reload();
}

}));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Настройки' }));
menu.append(new gui.MenuItem({
    label: 'Справка',
    submenu: submenu
}));
submenu.append(new gui.MenuItem({ label: 'Справка' }));
submenu.append(new gui.MenuItem({ label: 'О программе' }));
submenu.append(new gui.MenuItem({ label: 'Лицензия' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Выход',
    click: function() {
        gui.App.quit();

    }
}));



//menu.removeAt(1);
//menu.popup(10, 10);

// Показывать в виде контекстного меню
document.body.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // В том месте, где мы кликнули
    menu.popup(e.x, e.y);
    return false;
});

for (var i = 0; i < menu.items.length; ++i) {
    console.log(menu.items[i]);
};

//var logs = window.sessionStorage.getItem('login_sessions');
//if ( logs != "LogIn"){
//    menu.removeAt(0);
//    menu.removeAt(1);
//}

//

console.log(versions2);
console.log(util.inspect(process.memoryUsage()));
console.timeEnd('Start-APP');
// пробы


win.on('minimize', function() {
    console.log('Window is minimized');
});

//

//win.reload();


