import "./register.html";

Template.register.events({
  "click #register"(event){
      var Profile = {
        firstname: $("#usernameInput").val(),
      }
      var User = {
        username: $("#usernameInput").val(),
        password: $("#passwordInput").val(),
        profile: Profile
      }
      Accounts.createUser(User, function(err){
      });
  }
});
