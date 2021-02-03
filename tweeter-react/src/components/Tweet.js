import React, { Fragment } from 'react'
import './Tweet.css';

export const Tweet = (props) => {
  const {name, handle, profile_image, text, date} = props
  return(

    <>
    {name && handle && text && profile_image && date &&
    (
    <article className="tweet">
          <header>
            <span>
              <img src={profile_image} />
              <a> {name}</a>
            </span>
            <span className="user-handle"> <b>{handle}</b> </span>
          </header>
          <p className="tweet-under-line"><b>{text}</b></p>
          <footer>
            <span className="date">{date}</span> 
            <span className="icons">
              <i className="fas fa-flag" aria-hidden="true"></i>
              <i className="fas fa-retweet" aria-hidden="true"></i>
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </footer>
        </article>
      )
      }
      </>
  )
}