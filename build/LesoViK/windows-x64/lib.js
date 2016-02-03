/**
 * Created by zews on 01.02.2016.
 */
var versions = "lib.js@4.0.1";
//
function mytest(){
     return a;
};

    //

var uuid = require('node-uuid');
global.ID = uuid.v4();

//var uuid = require('node-uuid');
if (window.localStorage.getItem('userkey') == null) {
  //  window.alert(global.ID);
    window.localStorage.setItem('userkey', global.ID);

}else {
    console.log(window.localStorage.getItem('userkey'));
    };

//exports.lls = lls;

// Work
//user_work
var user_list = ["cl_user","user1", "user2", "user3", "user4", "user5"];
var user = require('./js/users.js');
user1 = new user.users();
user1.name = user_list[1];
user2 = new user.users();
user2.name = user_list[2];
//user1.addUsers ("+79538845740", "!q22lesy13!%");
//user2.addUsers ("+4542", "!gdgdfg!%");

var user_string = "<li><a href=логин вконтакте>"user2.getLogin();"</a> / <a href =edit>Редактировать</a></li>"
$("#userlist").html(user_string);

//getLogin()
//getPass()
//добавить в #userlist
// <li><a href="логин вконтакте">User_login</a> / <a href ="edit">Редактировать</a></li>

//

console.log(versions);
