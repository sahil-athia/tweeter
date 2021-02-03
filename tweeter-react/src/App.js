import './App.css';
import './components/layout.css';

import { Navigation } from "./components/Navigation"
import { Profile } from "./components/Profile"
import {TweetForm } from "./components/TweetForm"
import {Tweet } from "./components/Tweet"
import React, { useState } from 'react'
import { Tweets } from './components/Tweets';

const initialTweetData = [
  {
    name: "jill",
    handle: "@j",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "hehehhehehehhee",
    date: "10 days ago"
  },

  {
    name: "illest",
    handle: "@sick",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "whts this",
    date: "10 days ago"

  }
]
function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const addNewTweet = (text) => {
    const newTweet = {
      name: "illest",
      handle: "@sic,amk",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text,
      date: "10098 days ago"
    }

    setTweetData([newTweet, ...tweetData ])
    // the ... is used to PREPEND the new data
    // named tweetData because of the first cost
  }
  // iterats the arrays object
  return (
    <div className="App">
      <Navigation />
      <Profile />

      <main className="container">
      <TweetForm addNewTweet={addNewTweet}/>
      <Tweets tweetData={tweetData} />
    </main>
    </div>
  );
  // in TweetForm we are giving access to the 'database' so we can prepend the new tweets
  // based on the form
}

export default App;
