/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


var indexHeight = function(){
  var windowHeight = $(window).height(), 
      index = $('#index');

  $(index).css('height', windowHeight - 60);
}

var magicLineHeight = function(){
  $('.autoLiner').each(function(){
    var height = $(this).outerHeight();
    $(this).css('line-height', height + 'px');
  })
}

var smartLine = function(){
  $('.smartLine').each(function(){
    var parentHeight = $(this).parent('.entry').outerHeight(),
        parentImage = $(this).siblings('img').outerHeight(),
        usableHeight = parentHeight - parentImage - 60;

    $(this).css({'line-height': usableHeight + 'px'});
  })
}

$(document).on('click', '.back', function(){
  $('html,body').animate({
    scrollTop: 0
  }, 300);
});


$(window).load(function () {

  indexHeight();
  magicLineHeight();
  smartLine();

  $(window).resize(function(){
    indexHeight();
    magicLineHeight();
    smartLine();
  })

});