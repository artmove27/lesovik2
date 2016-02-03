/**
 * Created by zews on 24.01.2016.
 */
var versions = "mygui@1.0.2" ;
//alert(versions);
/**
 * Created by zews on 19.01.2016.
 *
 */

$ = global.jQuery;

// добавляем кнопки в меню
function Menus(){
    this.menuView = function(ntnName, menu) {
        // menu.appendChild(ntnName);
        $("#" + menu).append(ntnName);
    }
//exports.menu = Menus;
}
//создаем кнопки
function buttons(BtnId, BtnName, classN){

    this.Id = BtnId;
    this.BtnName = BtnName;
    this.classN = classN;
    var self = this;

    function creat2(){
        //создаем кнопку
        var addbuttont =  document.createElement('button');
        addbuttont.className = self.classN;
        addbuttont.id = self.Id;
        addbuttont.innerHTML = self.BtnName;
        return addbuttont;
    }

    function creat() {
        var addbuttont =  "<button id=";
        addbuttont = addbuttont + self.Id;
        addbuttont = addbuttont + " class" + self.classN + ">";
        addbuttont = addbuttont + self.BtnName +"</button>";
              return addbuttont;
        //...
    }

    akshin = function(){

        $("#" + self.Id).live('click', function() {
                // alert('Вы нажали на элемент кнопку');
                //  alert(self.Id);
                self.addaksin();
            }
        )

    };
    this.addaksin = null;
    this.views =function(){
        akshin();
        return  creat();

    }
}

// модальные окна
function  modalWindow(mId, classN, Title, Content){
    var self = this;
    // this.Id = mId;
    //  this.classN = classN;
    // this.Title = Title ;
    this.modalContent = "";

    this.Content  = function(){
      //    var modalContentmsg = modalContentmsg ;
        alert(this.modalContent);
           return this.modalContent ;
    }

     this.creat =  function() {
        $("#art-main").prepend("<div id=" + mId +"></div>");
        $("#"+mId).addClass("md-modal");
        $("#"+mId).addClass(classN);
        //

        $("#"+mId).prepend("<div id=" + "cn-" + mId +"></div>");
        $("#cn-"+mId).addClass("md-content");

        $("#cn-"+mId).prepend("<h3 id=" + "tl-" + mId +"></h3>");
        $("#tl-"+mId).prepend(Title);
        $("#tl-"+mId).after( "<div id=cn2-" + mId + "></div>" );

        // $("#cn2-"+self.Id).prepend( content() );
        $("#cn2-"+mId).prepend(this.modalContent);

        //  $("#"+self.Id).addClass("md-show");
        //  $("#mdoverlay").addClass("md-show");
        // alert( "Привет, я " + Title );
    }
    this.modalOpen = function(){
       // alert("do");
        $("#"+mId).addClass("md-show");
        $("#mdoverlay").addClass("md-show");

    };

    this.modalClose = function(){
        // alert("do " + self.Id);
        $("#"+mId).removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
        // alert("to");
    };

    //...
}

// меню на главной
    var m1 = new Menus();
    var b1 = new buttons("vk", "Открыть VK", "md-trigger");
    b1.addaksin = function () {
        //
        var win = gui.Window.open('http://vk.com', {
            position: 'center',
            width: 900,
            height: 900,
            frame: true
        });
    }
    m1.menuView(b1.views(), "menu");
//вставляем интерфейс


// настройки системы

    var teswin = new modalWindow("modal-1", "md-effect-1", "Настройки")
    teswin.modalContent = "<ul>" +
        "<li><a href='#'>Редактировать пользователей</a></li>" +
        "<li>Активировать PRO версию</li>" +
        "</ul>" +
        "Основные настройки системы" +
        "<br /><br />";
    teswin.creat();
//  открытие окна
    var b2 = new buttons("b2", "Настройки", "md-trigger");
    m1.menuView(b2.views(), "menu");
    b2.addaksin = function () {
        // alert("do " + teswin.Title);
        teswin.modalOpen();
        // alert("end");
    };

    var b2close = new buttons("b2close", "Закрыть", "md-close");  //кнопка закрытие окна
    b2close.addaksin = function () {
        teswin.modalClose();
    };         // закрываем окно

    var teswin_footmenu = new Menus(); // нижние меню окна
    teswin_footmenu.menuView(b2close.views(), "cn2-modal-1");  //добавляем кнопки в нижнее меню



//окно для пользователя
    var aduser = new modalWindow("modal-3", "md-effect-1", "Пользователи")
//var content =

    aduser.modalContent = "<ul>" +
        "<li><a href='#' id='link-1'>Редактировать</a></li>" +
        "</ul>";
     //aduser.modalContent

    aduser.creat();
//
$("#link-1").live('click', function() {
     window.location.href = "http://www.vk.com";
});

var buser = new buttons("buser", "Пользователи", "md-trigger");
m1.menuView( buser.views(), "menu" );
buser.addaksin = function() {
    aduser.modalOpen(); // открытие окна окно и метод
};

// закрываем окно
var aduserclose = new buttons("aduserclose", "Закрыть", "md-close");

aduserclose.addaksin = function() {
    // alert("do " + help.Title);
    aduser.modalClose();
    // alert("end");
};

var aduser_footmenu = new Menus(); // нижние меню окна
aduser_footmenu.menuView( aduserclose.views(), "cn2-modal-3");  //добавляем кнопки в нижнее меню

// help
//добовляем свой контент

var helps = new modalWindow("modal-2", "md-effect-1", "Помощь")
//var content =
helps.modalContent = "<ul>" +
    "<li>О программе</li>" +
    "<li>Помощь</li>" +
    "<li>Лицензия</li>" +
    "</ul>";
helps.creat();
var h1 = new buttons("h1", "Помощь", "md-trigger");
m1.menuView(h1.views(), "menu");
h1.addaksin = function () {
    helps.modalOpen();
};


//кнопка закрытие окна
var helpclose = new buttons("helpclose", "Закрыть", "md-close");

helpclose.addaksin = function () {
    helps.modalClose();

};
// закрываем окно

var help_footmenu = new Menus(); // нижние меню окна
help_footmenu.menuView(helpclose.views(), "cn2-modal-2");  //добавляем кнопки в нижнее меню


//меняем class
//$("#helpclose").removeClass("md-trigger");
//$("#helpclose").addClass("md-close");



