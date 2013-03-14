if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });

  Template.hello.greeting = function () {
    return "Welcome to login-hang-test.";
  };

  Template.hello.events({
    'click input' : function () {
      Meteor.call('restart');
    }
  });
}

if (Meteor.isServer) {
  var restart = function() {
    console.log('spawning...');
    // CHANGE THIS TO THE ABSOLUTE LOCATION OF THIS JS FILE
    var fileToTouch = '/Users/zorlak/hacking/meteor/login-hang-test/login-hang-test.js';
    
    var spawn = __meteor_bootstrap__.require('child_process').spawn,
        touch = spawn('touch', [fileToTouch]);
  };

  Meteor.methods({
    restart: restart
  });
}
