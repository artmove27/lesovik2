/**
 * Created by zews on 25.01.2016.
 */
var versions = "Users.js@0.3.4";
$ = global.jQuery;
function Users() {
      self = this;
      this.name = "";
   //   this.login = "" ;
   //  this.passwords = "";
      this.cn = "";
      this.LogIn = function(){
            //
            var uri = "https://m.vk.com/" + "login.php?cmd=login&luser=";
            uri = uri + this.getLogin() + "&lpass=";
          uri = uri + this.getPass() ;
                       //window.alert(uri);
           // openVK(uri);
            return uri ;
            //...
      };
      this.LogOut = function(){
          // openVK("http://vk.com/feed?cmd=quit");
            var uri = "http://vk.com/feed?cmd=quit";
            return uri ;
            //...
      };
      this.addUsers = function(login, pass){
           // window.alert(this.name);
            window.localStorage.setItem(this.name, login);
            window.localStorage.setItem(login, pass);
      }

      //get
      this.getLogin = function(){
         //   window.alert(self.name);
          var login = window.localStorage.getItem(this.name);
            return login;
            //...
      }
      this.getPass = function() {
         var pass = window.localStorage.getItem(this.getLogin());
          //  window.alert(pass);
            return pass;
           //..
      }
     //edit user
     this.edit = function(){
             if(this.getLogin() == 0){
                 $("input[name = login]").val("Введите логин");
                 $("input[name = pass]").val("Введите пароль");
             }else {
                 $("input[name = login]").val(this.getLogin());
                 $("input[name = pass]").val(this.getPass());
             }
      }
    //view
    this.view = function(){
        window.alert(this.getLogin());
        var string ;
         if (this.getLogin() == 0){
             string = "</a><a href=# id=" + this.name + "-edit class=editusers data-edit=" + this.name + ">Добавить аккаунт</a><br/>";
            //return string;
        } else {

             string = "<li><a href=# id=" + this.name + ">" + this.getLogin();
             string = string + "</a>  <a href=# id=" + this.name + "-edit class=editusers data-edit=" + this.name + ">(Редактировать)</a></li>";
           /// return string;
        }
        return string;
        //...
            }
}


exports.users = Users;
console.log(versions);