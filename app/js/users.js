/**
 * Created by zews on 25.01.2016.
 */
var versions = "Users.js@1.3.5";
$ = global.jQuery;
function Users(name) {
    self = this;
    this.cn = "";

    //
    this.name = name;

    this.lkey = function () {
        var lkey = this.name + "_l";
        return lkey;
    };
    this.pkey = function () {
        var pkey = this.name + "_p";
        return pkey;
    };
    //
    this.login = function (log) {
        if (!arguments.length) {
            var login = window.localStorage.getItem(this.lkey());
            return login;

        } else {
              window.localStorage.setItem(this.name, log);
        }
    };
    //
    this.pass = function (pass) {
        if (!arguments.length) {

            var pass = window.localStorage.getItem(this.pkey());
            return pass;

        } else {

            window.localStorage.setItem(this.pkey(), pass);
        }

    };
    //

    this.LogIn = function () {
        //
        var uri = "https://m.vk.com/" + "login.php?cmd=login&luser=";
        uri = uri + this.login() + "&lpass=";
        uri = uri + this.pass();
        //window.alert(uri);
        // openVK(uri);
        return uri;
        //...
    };
    this.LogOut = function () {
        // openVK("http://vk.com/feed?cmd=quit");
        var uri = "http://vk.com/feed?cmd=quit";
        return uri;
        //...
    };

     //edit user
     this.edit = function(){
             if(this.login() == null ){
                 $("input[name = login]").val("Введите логин");
                 $("input[name = pass]").val("Введите пароль");
                 $("input[name = idusers]").val(this.name);
             }else {
                 $("input[name = login]").val(this.login());
                 $("input[name = pass]").val(this.pass());
                 $("input[name = idusers]").val(this.name);

             }
                 }
    //view
    this.view = function(){
        var string ;
         if (this.login() == null){

             string = "<li><a href=# id=" + this.name + "-edit class=editusers data-edit=" + this.name + ">Добавить аккаунт</a></li>";
            //return string;
        } else {

             string = "<li><a href=# id=" + this.name + ">" + this.login();
             string = string + "</a>  <a href=# id=" + this.name + "-edit class=editusers data-edit=" + this.name + ">(Редактировать)</a></li>";
           /// return string;
        }
                return string;
        //...
            }
}


exports.users = Users;
console.log(versions);