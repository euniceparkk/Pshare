import React from 'react';
import { NavLink } from 'react-router-dom';
import './BigTweet.css';

function BigTweet({ tweet_id, tweet_userId, user_id, tweetsUser, tweetCreated, tweetContent, tweetsReplies, tweetsLikes, tweetsBookmarks }) {
  return (
    <div className="big-tweet__container">

      <div className="bt-container-1">
        <img alt="profile" src={tweetsUser.profile_img} id="big-tweet__profile-img"></img>

        <div className="bt-c1__flex-container">
          <NavLink to={`/profile/${tweetsUser.id}`}>
            <div id="bt__full-name">
              {tweetsUser.first_name} {tweetsUser.last_name}
            </div>
          </NavLink>
          <div id="bt__username">
            @{tweetsUser.username}
          </div>
        </div>

        <div id="bt__dot">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>



      <div className="bt-container-2">

      </div>

    </div>
  )
}

export default BigTweet;