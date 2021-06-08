import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { removeOneTweet } from '../../../store/tweet';
import { addOneLike } from '../../../store/like';
import './Tweet.css';

function Tweet({ tweet_id, tweet_userId, user_id, tweetsUser, tweetCreated, tweetContent, tweetsReplies, tweetsLikes, tweetsBookmarks }) {
  const dispatch = useDispatch();
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const [currentTweet, setCurrentTweet] = useState();

  const handleTweetDelete = async () => {
    await dispatch(removeOneTweet(currentTweet))
  }

  const handleDropdown = () => {
    setShowOptionsDropdown(!showOptionsDropdown);
  }

  const handleLikeAdd = (e) => {
    console.log('testing')
    e.preventDefault();
    dispatch(addOneLike({ user_id, tweet_id }))
  }

  return (

    <div className="home-tweet__container">
      {/* {console.log({ tweet })} */}
      <div className="home-tweet__profile-container">
        <img alt="profile" src={tweetsUser.profile_img} id="home-tweet__profile-img"></img>
      </div>

      <div className="home-tweet__user-container">
        <div id="home-tweet__full-name">
          {tweetsUser.first_name} {tweetsUser.last_name}
        </div>
        <div id="home-tweet__username">
          @{tweetsUser.username} • {(tweetCreated).slice(0, -13)}
        </div>
      </div>

      <div className="home-tweet__content-container">
        {tweetContent}
      </div>

      <div className="home-tweet__options-container">

        <div className="home-tweet__option home-tweet__comment">
          <i className="far fa-comment" id="home-tweet__comment-icon"></i>
          {tweetsReplies.length}
        </div>

        <div className="home-tweet__option home-tweet__like" onClick={handleLikeAdd}>
          <i className="far fa-heart" id="home-tweet__like-icon" ></i>
          {tweetsLikes.length}
        </div>

        <div className="home-tweet__option home-tweet__bookmark">
          <i className="far fa-bookmark" id="home-tweet__bookmark-icon"></i>
          {tweetsBookmarks.length}
        </div>

      </div>

      <div className="home-tweet__dropdown-container">
        <button type="button" id="tweet__options-button" onClick={() => {
          handleDropdown()
          setCurrentTweet(tweet_id)
          // console.log(tweet.user_id)
          // console.log(tweet_id)
        }}>
          <i className="fas fa-ellipsis-h"></i>
          {/* {console.log('tweet id', tweet_id)} */}
        </button>
      </div>

      {showOptionsDropdown && user_id === tweet_userId &&
        <div className="home-tweet__one-option">
          <button type="button" onClick={handleTweetDelete} id="tweet__delete-button">
            <i className="far fa-trash-alt trash-icon"></i>
            Delete
          </button>
        </div>
      }

    </div>

  )
}

export default Tweet;