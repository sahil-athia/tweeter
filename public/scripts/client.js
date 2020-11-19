$(document).ready(function() {
  $(".container").on("reload", loadTweets).trigger("reload");
  // once there is a reload, we call loadTweets, initial trigger at sucessful submit

  $('#slider').hide();
  // hide the error bar once page loads to avoid showing the red borders

  $('form').on('submit', event => {
    event.preventDefault();
    // we want to control the submit event ourselves, so prevent the default action of a submit

    const tweetValidity = tweetValue(this);
    const tweetLength = $(this).find('#tweet-text').val().length;

    if (!tweetLength || !tweetValidity) {
      $("#error-message").text('Your Tweet Should Not Be Empty');
      $('#slider').slideDown('slow');

    } else if (tweetLength > 140) {
      $("#error-message").text('Your Tweet Is Too Long');
      $('#slider').slideDown('slow');

    } else {
      const data = $('form').serialize();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data,
      }).done(function() {
        $('#tweet-text').val('');
        $('.counter').text(140);
        $('#slider').slideUp('slow');
        // once there is a sucessful submit, clear the textarea, reset the char counter to 140, and remove any errors
        $(".container").trigger("reload");
      });
    }
  });
});
