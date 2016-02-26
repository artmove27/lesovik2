/**
 * Created by zews on 05.02.2016.
 */
console.time('Start-Like');
var versions = "lykeme.js@0.0.1"
console.time('Start-Like');



function next(){
    sendObject.status = "OK";
    opener.postMessage(sendObject, '*');
    console.log("send");
   // window.alert("10s");

}


$(".mhead").css("display", "none");
$("body").css("overflow;", "hidden");

$(document).ready(function() {
      $('span.like_wrap a').trigger('click');
  //   setTimeout(next(), 100000);
    var sendObject = {
        status :  "OK",
        title:  "liky",
        value:  "next"
    };
   // sendObject.status = "OK";
  //  opener.postMessage({ status :  "OK",  title:  "liky",  value:  "next"}, '*');

      //  <div id="vk_head" class="mhead">


});
console.timeEnd('Start-Like');


console.log(versions);