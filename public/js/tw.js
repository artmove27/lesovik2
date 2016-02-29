/**
 * Created by zews on 25.02.2016.
 */


//{"lname":"Кузнецова","fname":"Светлана","pfoto":"http://cs629211.vk.me/v629211747/1f115/TkKuh0Uw4Kg.jpg","pfoto_id":"133979747_390878109","likeme":"no"}
var  listid = localStorage.getItem("listID");
var numbers = JSON.parse(listid);
var id = numbers.split("\n");
var indexlike_id =[];
id.forEach(function (item, i, id) {
    var userinfo = localStorage.getItem(item);
    userinfo = JSON.parse(userinfo);
    if(userinfo.likeme == "no"){
        indexlike_id[i] = item ;
        //   console.log(userinfo.likeme);
    }


});


//  var indexlike ;
var i = 0;
var timerId = setInterval(function() {
    var st = localStorage.getItem("like");
    //  if(st == "next"){

    var userinfo = localStorage.getItem(indexlike_id[i]);
    userinfo = JSON.parse(userinfo);
    console.log(userinfo.lname);
    //   console.log(st);
    var uri = "http://m.vk.com/photo"+userinfo.pfoto_id;
    window.frames[0].location = uri;
    localStorage.setItem("like_id", indexlike_id[i]);
    var uinf = {
        lname: userinfo.lname,
        fname: userinfo.fname,
        pfoto: userinfo.pfoto,
        pfoto_id: userinfo.photo_id,
        likeme: "yes"
    };
    var str = JSON.stringify(uinf);
    window.localStorage.setItem(indexlike_id[i], str);

    i++;
    //  }
    console.log(st + " "+ i);

},20000);

timerId;



