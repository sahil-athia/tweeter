import React, {useState} from 'react'
import './TweetForm.css';
import './error.css';

export const TweetForm = (props) => {
  const {addNewTweet} = props

  const [text, setText] = useState('');
  const tweetLength = 140 - text.length
  const outputStyle = {
    color: tweetLength < 0 ? "red" : "black"
  }

  const submitTweet = (event => {
    event.preventDefault()
    if (tweetLength >= 0 && tweetLength < 140) {
      addNewTweet(text)
      setText('')
    }

  })
  // passing the data up 
  return(
    <section className="new-tweet">
          <div id="slider">
            <i className="fas fa-exclamation-triangle"></i>
            <span id="error-message"></span>
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        <form onSubmit={submitTweet}method="POST" action="/tweets">
          <label for="tweet-text"><b>What are you humming about?</b></label>
          <textarea value={text} onChange={event => setText(event.target.value)}  name="text" id="tweet-text"></textarea>
          <div className="tweet-line">
            <button type="submit">Tweet</button>
            <output style={outputStyle} name="counter" className="counter" for="tweet-text" id="chars-length"><b>{tweetLength}</b></output>
          </div>
         
        </form>
      </section>
  )
}