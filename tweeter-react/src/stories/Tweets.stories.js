import React from 'react'
import { Tweets } from '../components/Tweets.js'
 

export default { title : 'Tweet Container ' }

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {
  const manyTweets = [
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
  ];

    return <Tweets tweetData={manyTweets} />
}