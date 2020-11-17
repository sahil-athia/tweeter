$(document).ready(function() {

  $("article.tweet").mouseover(function(){
    $(this).css("box-shadow", "10px 10px #4057a18f");
    $('.user-handle').css( "color", "#4057a18f" )
  }).mouseleave(function() {
    $(this).css("box-shadow", "0px 0px");
    $('.user-handle').css( "color", "#4057a100" )
  });

});