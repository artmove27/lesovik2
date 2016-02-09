/**
 * Created by zews on 24.01.2016.
 */

var versions = "gui2.js@1.0.6";

//...
//likeme


var likeme = new Batuns("modal-5");
//открываем окно настроек и старта
$("#likeme").live('click', function(){
    likeme.OpenModal();
});
// закрываем окно настроек

$("#close-likeme").live('click', function(){
       likeme.CloseModal();
         //
      if (wino != null){
          $("#likemestart").removeClass("poev");
          wino.close();
      };
});
//start LikeMe
var likemestart = new Batuns("modal-6");
$("#likemestart").live('click', function(){
    likeme.CloseModal();
    likemestart.OpenModal();
    $('.md-overlay').css('background','#E7E5A6');
    $('#modal6').css('background-color','#E7E5A6');
    $('#modal6').css('color','#000');
  //  $('#modal6').css('width','90%');

});

$("#closelikeme").live('click', function(){
    //background: rgba(190,204,162,0.8);
    $('.md-overlay').css('background','rgba(190,204,162,0.8)');
    likemestart.CloseModal();
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
       // window.alert(loginus.idusers.value)
        //onsubmit="adus(loginus.idusers.value,loginus.login.value,loginus.pass.value );return false"
        window.alert("Изменения внесены");
       // vu();
   }
);
//
$("#b4-2Close").live('click',
    function() {
        b4.CloseModal();
    }
);


//

var b1 = new Batuns("modal-1");
$("#b1").live('click', function(){b1.OpenModal()});
$("#b1Close").live('click',
    function() {
        b1.CloseModal();
       // win.window.close();
    }
        );
//...
var b2 = new Batuns("modal-2");
$("#b2").live('click', function(){b2.OpenModal()});
$("#b2Close").live('click',
    function() {
        b2.CloseModal();
    }
);

// аккаунты
var b3 = new Batuns("modal-3");
$("#b3").live('click', function(){b3.OpenModal()});
$("#b3Close").live('click',
    function() {
        b3.CloseModal();
    }
);

//vkopen_link
var wino ;
//
var win1 ;
$("#openvk").live('click',
    function() {
          openVK(user1.LogIn());
       // self.window.focus()
        //win.window.close()

             //
    }
);

//
$("#ovk").live('click',
    function() {
        openVk("http://vk.com/");
    }
);

//wv
$("#wv").live('click',
    function() {
        // window.open('http://oauth.vk.com/authorize?client_id=5130857&redirect_uri=close.html&display=popup&response_type=token', "win1");
      //  var win2 =  window.open('wv.html', "win-wv");
      //   global.M = "awaqda";
      //  win1.window.close();
    }
);
//vkclose
$("#vkclose").live('click',
    function() {
       wino.window.close();
    }
);


console.log(versions);

//
