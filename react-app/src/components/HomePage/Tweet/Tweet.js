import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addOneLike, removeOneLike, loadAllLikes } from '../../../store/like';
import { addOneBookmark, loadAllBookmarks, removeOneBookmark } from '../../../store/bookmark';
import { removeOneTweet } from '../../../store/tweet';
import './Tweet.css';

function Tweet({ repliedTweet, tweet_id, tweet_userId, user_id, tweetsUser, tweetCreated, tweetContent, tweetsReplies, tweetsLikes, tweetsBookmarks }) {
  const dispatch = useDispatch();
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const [currentTweet, setCurrentTweet] = useState();

  const [showReplyUsername, setShowReplyUsername] = useState(false);

  const allLikes = useSelector(state => {
    const like = Object.values(state.like)
    return like
  })
  // console.log('likes', allLikes)

  const allBookmarks = useSelector(state => {
    const bookmark = Object.values(state.bookmark)
    return bookmark
  })

  useEffect(() => {
    dispatch(loadAllLikes())
  }, [dispatch])

  useEffect(() => {
    dispatch(loadAllBookmarks())
  }, [dispatch])


  const handleTweetDelete = async () => {
    await dispatch(removeOneTweet(currentTweet))
  }

  const handleDropdown = () => {
    setShowOptionsDropdown(!showOptionsDropdown);
  }

  if (!allLikes) {
    return null;
  }

  if (!allBookmarks) {
    return null;
  }

  // finding user_id in allLikes to limit more than like per tweet
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
    const like_id = filteredLikes[0].id;
    await dispatch(removeOneLike(like_id));
  }
  // const filteredLikesLen = filteredLikes.length ??

  const filteredBookmarks = allBookmarks.filter((userBookmark) => {
    if (userBookmark.user_id === user_id && userBookmark.tweet_id === tweet_id) {
      return userBookmark
    }
  })

  const handleBookmarkAdd = (e) => {
    e.preventDefault();
    if (filteredBookmarks.length) {
      return
    }
    dispatch(addOneBookmark({ user_id, tweet_id }));
  }

  const handleBookmarkDelete = async () => {
    const bookmark_id = filteredBookmarks[0].id;
    await dispatch(removeOneBookmark(bookmark_id));
  }

  return (
    <div>

      <div className="home-tweet__container">
        {/* {console.log({ tweet })} */}
        <div className="home-tweet__profile-container">
          <NavLink to={`/tweet/${tweet_id}`}>
            <img alt="profile" src={tweetsUser.profile_img} id="home-tweet__profile-img"></img>
          </NavLink>

        </div>

        <div className="home-tweet__user-container">
          <NavLink to={`/profile/${tweetsUser.id}`}>
            <div id="home-tweet__full-name">
              {tweetsUser.first_name} {tweetsUser.last_name}
            </div>
          </NavLink>
          <div id="home-tweet__username">
            @{tweetsUser.username} • {(tweetCreated).slice(5, -13)}
          </div>
        </div>

        <div className="home-tweet__content-container">
          {showReplyUsername && repliedTweet &&
            <div>
              hello
          </div>
          }

          {tweetContent}
        </div>

        <div className="home-tweet__options-container">

          <div className="home-tweet__option home-tweet__comment">
            <i className="far fa-comment" id="home-tweet__comment-icon"></i>
            {tweetsReplies.length}
          </div>

          {filteredLikes.length ?
            <div className="home-tweet__option home-tweet__like" onClick={handleLikeDelete}>
              <i className="fas fa-heart" id="home-tweet__like-icon" style={{ color: "red" }}></i>
              {tweetsLikes.length}
            </div>
            :
            <div className="home-tweet__option home-tweet__like" onClick={handleLikeAdd}>
              <i className="far fa-heart" id="home-tweet__like-icon" style={{ color: "grey" }}></i>
              {tweetsLikes.length}
            </div>
          }

          {filteredBookmarks.length ?
            <div className="home-tweet__option home-tweet__bookmark" onClick={handleBookmarkDelete}>
              <i className="fas fa-bookmark" id="home-tweet__bookmark-icon" style={{ color: "gold" }}></i>
              {tweetsBookmarks.length}
            </div>
            :
            <div className="home-tweet__option home-tweet__bookmark" onClick={handleBookmarkAdd}>
              <i className="far fa-bookmark" id="home-tweet__bookmark-icon" style={{ color: "grey" }}></i>
              {tweetsBookmarks.length}
            </div>
}

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
    </div>
  )
}

export default Tweet;