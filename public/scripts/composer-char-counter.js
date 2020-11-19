$(document).ready(function() {
  $('.counter').text(140);

  $('#tweet-text').on('input', function() {
    let chars = 140;
    const inputLength = chars - this.value.length;

    if (inputLength < 0) {
      $(this).parent().find('.counter').css("color", "red");
    } else {
      $(this).parent().find('.counter').css("color", "#545149");
    }
    $(this).parent().find('.counter').text(inputLength);
    // we are traversing from textarea up to form and then finding the output decendant.
  });
});
