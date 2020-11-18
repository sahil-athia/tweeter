/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  
  
  const createTweetElement = (data) => {
    const date = new Date(data.created_at)
    let $tweet = `
    <article class="tweet">
    <header>
      <span>
        <img src="${data.user.avatars}">
        <i> ${data.user.name}</i>
      </span>
      <span class="user-handle"> <b>${data.user.handle}</b> </span>
    </header>
    <p class="tweet-under-line"><b>${data.content.text}</b></p>
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
    console.log($tweet)
    return $tweet
  };


  const renderTweets = (tweetData) => {
    for (const tweet of tweetData) {
      $tweet = createTweetElement(tweet)
      $('.tweet-container').append($tweet);
    }
  }

  const loadTweets = () => {
    $.ajax('/tweets', {
      method:'GET'
    }).then(res => renderTweets(res))
  }

  $('form').on('submit', event => {
    event.preventDefault()

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $('form').serialize()
    }).then(res => console.log(res))
  })
  loadTweets()
});
