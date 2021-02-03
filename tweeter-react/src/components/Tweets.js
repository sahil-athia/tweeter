import React from 'react'
import { Tweet } from './Tweet'

export const Tweets = props => {
  const { tweetData } = props
  const tweets = tweetData ? tweetData.map((tweetData, index) => {
    return <Tweet
      key={index}
      name={tweetData.name}
      handle={tweetData.handle}
      profile_image={tweetData.profile_image}
      text={tweetData.text}
      date={tweetData.date}
      />
  }) : 'This Tweet is Not Valid'
  return (
    <section className="tweets">
        {tweets}
      </section>
  )
}