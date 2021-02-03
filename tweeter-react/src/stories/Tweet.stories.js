import React from 'react'
import { Tweet } from '../components/Tweet.js'
 

export default { title : 'singular tweet' }

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
  const singleTweet = {
    name: "jill",
    handle: "@j",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "hehehhehehehhee",
    date: "10 days ago"
  }

  //return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_img={singleTweet.profile_img} 
                //text={singleTweet.text} date={singleTweet.date} />

    return <Tweet {...singleTweet} />
}