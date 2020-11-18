/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  
  const createTweetElement = (data) => {
    const date = new Date(data.created_at * 1000)
    let $tweet = `
    <article class="tweet">
    <header>
      <span>
        <img src="${data.user.avatars}">
        <i> ${data.user.name}</i>
      </span>
      <span class="user-handle"> <b>${data.user.handle}</b> </span>
    </header>
    <p id="tweet-line"><b>${data.content.text}</b></p>
    <footer>
      <span id="date">${date.toUTCString()}</span>
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
    for (const tweet of tweetData) {
      $tweet = createTweetElement(tweet)
      $('.container').append($tweet);
    }
  }
  
  renderTweets(data);
});
