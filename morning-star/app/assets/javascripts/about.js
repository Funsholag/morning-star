// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
function showMenu() {
  if ($('.menu').css("display") != "none") {
    $('.menu').css("display", "none");
  }
  else{
     $('.menu').css("display", "block");
    $('.menu').addClass('animated bounceIn');
  }
};

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$(document).ready(function(){
  $('.slider').slider({indicators:false});
});
