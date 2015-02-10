if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  
  (function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  Template.content.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.content.events({
    'click #download-button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
