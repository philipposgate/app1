if (Meteor.isClient) {
  Session.set("counter", 0);

  
  Template.hello.greeting = function () {
    return "Welcome to app1.";
  };
  
  Template.hello.counter = function () {
    return Session.get("counter");
  };

  Template.hello.events({
    'click input': function () {
        console.log("You pressed the button");
      
	    var counter = Session.get("counter");
	    counter = counter + 1;
	    console.log(counter);
    	Session.set("counter", counter);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

Router.configure({
  load: function() {
    $('html, body').animate({scrollTop: 0}, 400);
    $('.content').hide().fadeIn(800);
  }
});

Router.map( function () {
    
    this.route('home', {
    	path: '/', 
    	layoutTemplate: 'siteLayout',
    	action: function(){
    		this.render();
    		updateSiteNavBtns('home');}
    });
    	
    this.route('about', {
    	layoutTemplate: 'siteLayout',
    	action: function(){
    		this.render();
    		updateSiteNavBtns('about');}
    });
    
    this.route('contact', {
    	layoutTemplate: 'siteLayout',
    	action: function(){
    		this.render();
    		updateSiteNavBtns('contact');}
    });
});

function updateSiteNavBtns (siteNavBtn)
{
	$("li", "#siteNavBtns").removeClass("active");
	$("li[siteNavBtn=" + siteNavBtn + "]", "#siteNavBtns").addClass("active");
}