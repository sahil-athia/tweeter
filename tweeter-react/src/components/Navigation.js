import React from 'react'
import './Navigation.css';
// since this is a deviated file, we have to import react and export the function for the nav
export const Navigation = () => {

  return(
    <nav>
      <span className="logo">tweeter</span>
      <span className="tweet-prompt">
        <a><b>Write</b> a new tweet</a>
        <i className="fas fa-chevron-down toggle-box"></i>
      </span>
    </nav>
  )
}
