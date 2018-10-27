// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs

//= require_tree .

$(document).ready(function(){
  $('.button-collapse').sideNav('show');
  $(".button-collapse").sideNav({
    menuWidth: 180,
    closeOnClick: true
  });
});


$(document).ready(function(){
  $(".dropdown-button").dropdown({hover: true});
});


$(function() {

  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 42) {
      $(".brand-logo").hide();
    } else {
      $(".brand-logo").show();
    }

  });

});


$(document).ready(function() {
  var options = [{
    selector: '#staggered-test',
    offset: 300,
    callback: function(el) {
      Materialize.showStaggeredList($(el));
    }
  }, {
    selector: '#image-test',
    offset: 300,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  }];

  Materialize.scrollFire(options);
});

$(document).ready(function(){
  $('.target').pushpin({
    top: 0,
    bottom: 1000,
    offset: 0
  });
});
