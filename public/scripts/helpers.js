const escape =  function(str) {
  // avoid js style inputs affecting the code
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (data) => {
  // create a template article for each new tweet
  const date = new Date(data.created_at);
  let $tweet = `
  <article class="tweet">
    <header>
      <span>
        <img src="${escape(data.user.avatars)}">
        <a> ${escape(data.user.name)}</a>
      </span>
      <span class="user-handle"> <b>${escape(data.user.handle)}</b> </span>
    </header>
    <p class="tweet-under-line"><b>${escape(data.content.text)}</b></p>
    <footer>
      <span class="date">${moment(date).fromNow()}</span> 
      <span class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>
    `;
  return $tweet;
};

const renderTweets = (tweetData) => {
  //prepend new tweets to the tweet container section
  $('.tweet-container').html('');
  for (const tweet of tweetData) {
    const $tweet = createTweetElement(tweet);
    $('.tweet-container').prepend($tweet);
  }
};

const loadTweets = () => {
  // use an ajax request to get the information on tweets from the database
  $.ajax('/tweets', {
    method:'GET'
  }).then(res => {
    $('.tweet-container').empty();
    renderTweets(res);
  })
};

const tweetValue = (input) => {
  // returns true if a tweet contains all spaces
  let string = $(input).find('#tweet-text').val();
  for (const char of string) {
    if (char !== " ") {
      return true;
    }
  }
  return false;
};
