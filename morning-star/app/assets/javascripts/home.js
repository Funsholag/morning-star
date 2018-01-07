// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

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
