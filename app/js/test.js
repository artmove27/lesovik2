/**
 * Created by zews on 29.01.2016.
 */
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
global.window = window
// Global
//
global.gui = gui;
var win = gui.Window.get(); //окно
global.jQuery = jQuery;

var OS = require('os');
var osarh = OS.arch();
console.log(osarh);

document.write('{"token_code": dddd}');

//menu
var menu = new gui.Menu();
var submenu = new gui.Menu();

menu.append(new gui.MenuItem({ label: 'Обновить',
  click: function() {
    win.reload();

  }

}));
menu.append(new gui.MenuItem({ type: 'separator' }));


//menu.append(new gui.MenuItem({ label: 'Вырезать' }));
menu.append(new gui.MenuItem({ label: 'Копировать',
  click: function() {
    document.execCommand("copy");
  }

}));
menu.append(new gui.MenuItem({ label: 'Вставить',
  click: function() {
    document.execCommand("paste");
  }
}));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Настройки',
  click: function() {
    b1.OpenModal();
    $("input[name = pincode]").val(PinCode.get());
  }
}));
menu.append(new gui.MenuItem({
  label: 'Справка',
  submenu: submenu
}));
submenu.append(new gui.MenuItem({ label: 'Справка' }));
submenu.append(new gui.MenuItem({ label: 'О программе',
  click: function(){
    b2.CloseModal();
    about.OpenModal();
    //
  }
}));
submenu.append(new gui.MenuItem({ label: 'Лицензия' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Выход',
  click: function() {
    gui.App.quit();
  }
}));

