/**
 * Created by zews on 24.01.2016.
 */

var versions = "gui2.js@0.0.1";
//$ = global.jQuery;

//$("#menu").append("sdl;fkskdjfkldsjfljdsjfjdsf");


function Batuns(IdModal){
    this.OpenModal = function (){

        $("#"+IdModal).addClass("md-show");
        $("#mdoverlay").addClass("md-show");
    }

    this.CloseModal = function(){

        $("#"+IdModal).removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");


        //...
    }

   //..
}
//...
var b1 = new Batuns("modal-1");
$("#b1").live('click', function(){b1.OpenModal()});
$("#b1Close").live('click',
    function() {
        b1.CloseModal();
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

//...
var b3 = new Batuns("modal-3");
$("#b3").live('click', function(){b3.OpenModal()});
$("#b3Close").live('click',
    function() {
        b3.CloseModal();
    }
);

//vkopen_link
function openVK() {
    var win = gui.Window.open ('https://vk.com', {
        position: 'center',
        width: 900,
        height: 700
    });


   }


$("#openvk").live('click',
    function() {
        openVK();
    }
);


console.log(versions);