/**
 * Created by zews on 01.02.2016.
 */

var versions2 = "app.js@6.2.15"

// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
global.window = window
// Global
//
global.gui = gui;
var win = gui.Window.get(); //окно
global.jQuery = jQuery;
var gui = require('nw.gui');
var sysstatus = global.sysstatus;
var versions = "LesoViK v.a8.0.9";
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

//class userlist


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

//window.alert(user3.pkey());