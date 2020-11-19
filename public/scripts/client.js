/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = (data) => {
  const date = new Date(data.created_at)
  let $tweet = `
  <article class="tweet">
  <header>
    <span>
      <img src="${escape(data.user.avatars)}">
      <i> ${escape(data.user.name)}</i>
    </span>
    <span class="user-handle"> <b>${escape(data.user.handle)}</b> </span>
  </header>
  <p class="tweet-under-line"><b>${escape(data.content.text)}</b></p>
  <footer>
    <span id="date">${date.toLocaleString()}</span>
    <span class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </span>
  </footer>
  </article>
    `
  return $tweet
};

const renderTweets = (tweetData) => {
  $('.tweet-container').html('');
  for (const tweet of tweetData) {
    const $tweet = createTweetElement(tweet);
    $('.tweet-container').prepend($tweet);
  }
}

const loadTweets = () => {
  $.ajax('/tweets', {
    method:'GET'
  }).then(res => {
    $('.tweet-container').empty();
    renderTweets(res);
  })
}

const tweetValue = (input) => {
  let string = $(input).find('#tweet-text').val();
  for (const char of string){
    if (char !== " "){
      return true;
    }
  }
  return false;
}


$(document).ready(function() {

  $(".container").on("reload", loadTweets).trigger("reload");
  // once there is a reload, we call loadTweets
  $('#slider').hide();
  $('form').on('submit', event => {
    event.preventDefault()
    const tweetValidity = tweetValue(this)
    const tweetLength = $(this).find('#tweet-text').val().length

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
        $('#slider').slideUp('slow');
        $(".container").trigger("reload");
      })
    }
  })
});
