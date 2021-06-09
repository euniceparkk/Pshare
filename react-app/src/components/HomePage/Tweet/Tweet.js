import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeOneTweet } from '../../../store/tweet';
import { addOneLike, removeOneLike, loadAllLikes } from '../../../store/like';
import './Tweet.css';

function Tweet({ tweet_id, tweet_userId, user_id, tweetsUser, tweetCreated, tweetContent, tweetsReplies, tweetsLikes, tweetsBookmarks }) {
  const dispatch = useDispatch();
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
  const [currentTweet, setCurrentTweet] = useState();

  useEffect(() => {
    dispatch(loadAllLikes())
  }, [dispatch])

  const handleTweetDelete = async () => {
    await dispatch(removeOneTweet(currentTweet))
  }

  const handleDropdown = () => {
    setShowOptionsDropdown(!showOptionsDropdown);
  }

  const allLikes = useSelector(state => {
    const like = Object.values(state.like)
    return like
  })
  // console.log('likes', allLikes)

  if (!allLikes) {
    return null;
  }

  const filteredLikes = allLikes.filter((userLike) => {
    if (userLike.user_id === user_id && userLike.tweet_id === tweet_id) {
      return userLike
    }
  })
  // console.log('filtered likes', filteredLikes)

  const handleLikeAdd = (e) => {
    // console.log('testing')
    e.preventDefault();

    if (filteredLikes.length) {
      return
    }
    dispatch(addOneLike({ user_id, tweet_id }))
  }

  const handleLikeDelete = async () => {
    // console.log('like_idddd', like_id)
    const like_id = filteredLikes[0].id
    await dispatch(removeOneLike(like_id));
  }

  const filteredLikesLen = filteredLikes.length

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
          @{tweetsUser.username} • {(tweetCreated).slice(5, -13)}
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

        {!filteredLikesLen &&
          <div className="home-tweet__option home-tweet__like" onClick={handleLikeAdd}>
            <i className="far fa-heart" id="home-tweet__like-icon" style={{ color: "grey" }}></i>
            {tweetsLikes.length}
          </div>
        }

        {filteredLikesLen &&
          <div className="home-tweet__option home-tweet__like" onClick={handleLikeDelete}>
            <i className="fas fa-heart" id="home-tweet__like-icon" style={{ color: "red" }}></i>
            {tweetsLikes.length}
          </div>
        }

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