/**
 * Created by zews on 24.01.2016.
 */

var versions = "gui2.js@1.0.4";

//...
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
  // win1 =  window.open('http://vk.com/login.php?cmd=login&luser=+79538845740&lpass=!q22lesy13!%', "win1");
   //     win1 = window.location.href = "http://vk.com/login.php?cmd=login&luser=+79538845740&lpass=!q22lesy13!%"
       // openVK("http://vk.com/login.php?cmd=login&luser=+79538845740&lpass=!q22lesy13!%");
        //window.alert("DO");
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