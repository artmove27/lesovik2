/**
 * Created by zews on 01.02.2016.
 */

var versions2 = "app.js@6.2.14"

// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
global.window = window
// Global
//
global.gui = gui;
var win = gui.Window.get(); //окно
//global.jQuery = jQuery;
var gui = require('nw.gui');
var sysstatus = global.sysstatus;
var versions = "LesoViK v.a7.0.7";
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
//localStorage.setItem('userkey', 'no');
//alert(localStorage.getItem('userkey'));
//require('./js/lib.js');

//старотвые установки


//модули программы bin
//require('nw.gui').Window.get().evalNWBin(null, './js/mytest.bin');

//GUI
//menu
var menu = new gui.Menu();
menu.append(new gui.MenuItem({ label: 'Item A' }));
menu.append(new gui.MenuItem({ label: 'Item B' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Выход',
    click: function() {
        self.win.close();
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
}

console.log(versions2);
// пробы


//https://oauth.vk.com/authorize?client_id=5130857&scope=friends,photos&redirect_uri=http://oauth.vk.com/blank.html&display=touch&response_type=token
//https://oauth.vk.com/authorize?client_id=5130857&scope=friends,photos&redirect_uri=http://oauth.vk.com/blank.html&display=wap&response_type=token
//client_id=APP_ID&
//scope=SETTINGS&
//redirect_uri=REDIRECT_URI&
//display=DISPLAY&
//response_type=token