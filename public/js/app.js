
var versions2 = "app.js@4.0.1"

// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()

// Global
//
global.gui = gui;
//global.mainWindow   = gui.Window.get();
var win = gui.Window.get(); //окно
//global.jQuery = jQuery;

// users
var user = require('./js/users.js');

var petra = new user.users;
petra.login = "Petra";
petra.passwords ="eqweqwe";

//alert(petra.login);


//gui.Shell(); //оболочка
//gui.Tray // трей
//gui.Menu // менюшки
//gui.Clipboard // буффер обмена//
//gui.Shortcut // сочетания клавиш
//var user = require('./js/mygui.js');


//base
//document.domain = 'vk.com';
//localStorage.setItem('key', 'value');
//alert(localStorage.getItem('key'));
//
//indexedDB.deleteDatabase('myBase');
//var http = require("http");
//var uuid = require('node-uuid');
//alert(uuid.v4());

var uuid = require('node-uuid');
console.log(uuid.v4());
//

//server-echo


//
console.log("Start Init");
//console.log(md.mbo);

