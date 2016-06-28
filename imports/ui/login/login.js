import "./login.html";

Template.login.events({
  "click #login"(event){
      var User = {
        username: $("#emailInput").val(),
        password: $("#passwordInput").val()
      }
      Meteor.loginWithPassword($("#emailInput").val(), $("#passwordInput").val(), function(error){
      });
  }
});
