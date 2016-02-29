/**
 * Created by zews on 24.01.2016.
 */

var versions = "gui2.js@3.0.6";

//...
var wino ;

//likeme

$("#likemestop").live('click', function(){
    window.alert("Пауза. Для продолжения нажмите <<ОК>>");
    });

var likemestart = new Batuns("modal-6");
$("#closelikeme").live('click', function(){
    //background: rgba(190,204,162,0.8);
    $('.md-overlay').css('background','rgba(190,204,162,0.8)');
    likemestart.CloseModal();
    Modal5.del();
    //
    likimer.sort();
});


//edit AK
var b4 = new Batuns("modal-4");
$(".editusers").live('click', function(){

     b3.CloseModal();
     b4.OpenModal();

});
//
$(".eddits").live('click', function(){
    b3.CloseModal();
    b4.OpenModal();

});
//
$("#b4Close").live('click',
    function() {
      b4.CloseModal();
    adus(loginus.idusers.value, loginus.login.value, loginus.pass.value);
        window.alert("Изменения внесены");
   }
);
//
$("#b4-2Close").live('click',
    function() {
        b4.CloseModal();
    }
);

// work
var b2 = new Batuns("modal-2");

// аккаунты
var b3 = new Batuns("modal-3");

$("#b3Close").live('click',
    function() {
        b3.CloseModal();
    }
);

//vkopen_link

//
var win1 ;
$("#openvk").live('click',
    function() {
          openVK(user1.LogIn());

             //
    }
);

//

//wv

$("#app-quit").live('click',
    function() {
        gui.App.quit();
    }
);


//
var about = new Batuns("modal-about");
// объект меню

$("#minwin").live('click',
    function() {

        win.minimize();
    }
);
//глобальный обработчик

$('#menu').on('click', "button", function(){
   // console.log( $(this).data('cmd') );
    var data = $(this).data("cmd"); // вытащим текст из нажатого элемента
    switch (data){
        case "vkopner":
            openVk("http://vk.com/");
            break;
        case "vkclose":
            logoutVK("http://vk.com/feed?cmd=quit");
            break;
        case "b3":
            b3.OpenModal();
            break;
        case "lcpan":
                  likimer.ftokenus();
                ModalPanel.event();
              likimer.sort();
                $("#pcm").slideDown();
            break;
        case "b1":
            b1.OpenModal();
            $("input[name = pincode]").val(PinCode.get());
            ModalSetting.event();
            break;
        case "b2":
            b2.OpenModal();
            Modal2.event();
            Modal2.linkevent();
            break;
        default:
    }


});

//объект окна

//настройки
var b1 = new Batuns("modal-1");
var ModalSetting ={
    del: function(){
        $('#modal-1').off('click');

    },
    event: function(){
        $("#modal-1").on("click", "button", function() {
            PinCode.set(pcode.pincode.value)
            b1.CloseModal();
            PinCode.verify();
            ModalSetting.del();


        })

    }

}

//$("#lkmstart").live('click',
 //  function() {
 //      likimer.fotolikes();
 //   });
//панель лайкера
var ModalPanel = {
    del: function(){
        $('#pcm').off('click');

    },

    event: function(){
        $("#pcm").on("click", "button", function(){
            var data = $(this).data("cmd");
          //  console.log(data);
            switch (data){
                case "cmdeditid":
                    ModalPanel.del();
                    $("#pcm").slideUp();
                    if (likeris != null){
                        likeris.close(true);
                    }
                    $("#likeme").removeClass("poev");
                    $("#lkmstart").removeClass("poev");
                    break;
                case "likeme":
                    likeme.OpenModal();
                    getIDList();
                    Modal5.event();
                    break;
                case "lkmstartn":
                     if(indexlisid.g() == '""'){
                         window.alert("Список ID пуст");
                     }else {
                         console.log(indexlisid.g());
                         likimer.fotolikes();
                     };

                    break;
                default:
            }

        })

    }

};
//
$("#close-about").live('click',
    function() {
        about.CloseModal();
    });
//список ID
var likeme = new Batuns("modal-5");
var Modal5 = {
    del: function(){
        $('#modal-5').off('click');

    },

    event: function(){
         $("#modal-5").on("click", "button", function(){
             var data = $(this).data("cmd");
             console.log(data);
             switch (data){
                 case "close-likeme":
                     likeme.CloseModal();
                     //
                     if (wino != null){
                         $("#likemestart").removeClass("poev");
                         wino.close();
                     }
                     Modal5.del();
                     break;
                 case "likemestart":
                     setIDList();
                     likeme.CloseModal();
                     likemestart.OpenModal();

                     setTimeout(listidtop(), 1000);

                     break;
                 default:
             }

         })

    }
    //
};
//

//
var Modal2 = {
    linkevent: function(){
        $("#modal-2").on("click", "a", function() {
            var data = $(this).data("cmd");
            switch (data){
                case "about":

                    b2.CloseModal();
                    about.OpenModal();
                    Modal2.del();

                    break;
                default:
            }

        })
    },
    event: function(){
        $("#modal-2").on("click", "button", function() {
                //b2Close
           b2.CloseModal();
            Modal2.del();
        })
        //
    },
    del: function(){
        $('#modal-2').off('click');

    },


}
//




//end work
console.log(versions);

//
