import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { removeOneTweet } from '../../../store/tweet';
import './Tweet.css'

function Tweet({ tweet, user_id }) {
  const dispatch = useDispatch();
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const [currentTweet, setCurrentTweet] = useState();

  const handleDelete = async () => {
    await dispatch(removeOneTweet(currentTweet))
  }

  const handleDropdown = () => {
    setShowOptionsDropdown(!showOptionsDropdown);
  }

  return (

    <div className="home-tweet__container">
      {/* {console.log({ tweet })} */}
      <div className="home-tweet__profile-container">
        <img src={tweet.user.profile_img} id="home-tweet__profile-img"></img>
      </div>

      <div className="home-tweet__user-container">
        <div id="home-tweet__full-name">
          {tweet.user.first_name} {tweet.user.last_name}
        </div>
        <div id="home-tweet__username">
          @{tweet.user.username} • {(tweet.created_at).slice(0, -13)}
        </div>
      </div>

      <div className="home-tweet__content-container">
        {tweet.content}
      </div>

      <div className="home-tweet__options-container">

        <div className="home-tweet__option home-tweet__comment">
          <i className="far fa-comment" id="home-tweet__comment-icon"></i>
          {tweet.replies.length}
        </div>

        <div className="home-tweet__option home-tweet__like">
          <i className="far fa-heart" id="home-tweet__like-icon"></i>
          {tweet.likes.length}
        </div>

        <div className="home-tweet__option home-tweet__bookmark">
          <i className="far fa-bookmark" id="home-tweet__bookmark-icon"></i>
          {tweet.bookmarks.length}
        </div>

      </div>

      <div className="home-tweet__dropdown-container">
        <button type="button" id="tweet__options-button" onClick={() => {
          handleDropdown()
          setCurrentTweet(tweet.id)
          // console.log(tweet.user_id)
          // console.log(tweet.id)
        }}>
          <i class="fas fa-ellipsis-h"></i>
          {/* {console.log('tweet id', tweet.id)} */}
        </button>
      </div>

      {showOptionsDropdown && user_id == tweet.user_id &&
        <div className="home-tweet__one-option">
          <button type="button" onClick={handleDelete} id="tweet__delete-button">
            <i class="far fa-trash-alt trash-icon"></i>
            Delete
          </button>
        </div>
      }

    </div>

  )
}

export default Tweet;