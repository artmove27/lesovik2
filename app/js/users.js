/**
 * Created by zews on 25.01.2016.
 */
var versions = "Users.js@0.2.4";
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
            window.alert(this.name);
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
}


exports.users = Users;
console.log(versions);