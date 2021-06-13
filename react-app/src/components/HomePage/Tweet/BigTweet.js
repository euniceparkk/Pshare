import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import { addOneLike, removeOneLike, loadAllLikes } from '../../../store/like';
import { addOneBookmark, loadAllBookmarks, removeOneBookmark } from '../../../store/bookmark';
import './BigTweet.css';
import { removeOneTweet } from '../../../store/tweet';

function BigTweet({ tweet_id, tweet_userId, user_id, tweetsUser, tweetCreated, tweetContent, tweetsReplies, tweetsLikes, tweetsBookmarks }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentTweet, setCurrentTweet] = useState();
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const allLikes = useSelector(state => {
    const like = Object.values(state.like)
    return like
  })

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
    history.push('/home');
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
          <button type="button" id="bt__options-button" onClick={() => {
            handleDropdown()
            setCurrentTweet(tweet_id)
          }}>
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>

        {showOptionsDropdown && user_id === tweet_userId &&
          <div className="bt__one-option">
            <button type="button" onClick={handleTweetDelete} id="tweet__delete-button">
              <i className="far fa-trash-alt trash-icon"></i>
              Delete
            </button>
          </div>
        }

      </div>

      <div className="bt-container-2">
        <div id="bt__content">
          {tweetContent}
        </div>
        <div id="bt__time">
          {(tweetCreated).slice(0, 5)} {(tweetCreated).slice(5, -13)}
        </div>
      </div>


      <div className="bt-container-3">

        <div className="bt-container-3__1">

          <div className="bt__length">
            <div className="bt__len-num">{tweetsReplies.length}</div>
            <span className="bt__len-text"> Replies</span>
          </div>

          <div className="bt__length">
            <div className="bt__len-num">{tweetsLikes.length}</div>
            <span className="bt__len-text"> Likes</span>
          </div>

          <div className="bt__length">
            <div className="bt__len-num">{tweetsBookmarks.length}</div>
            <span className="bt__len-text"> Bookmarks</span>
          </div>

        </div>

        <div className="bt-container-3__2">
          <div className="bt__option bt__comment">
            <i className="far fa-comment" id="bt__comment-icon"></i>
          </div>

          {filteredLikes.length ?
            <div className="bt__option bt__like" onClick={handleLikeDelete}>
              <i className="fas fa-heart" id="bt__like-icon" style={{ color: "red" }}></i>
            </div>
            :
            <div className="bt__option bt__like" onClick={handleLikeAdd}>
              <i className="far fa-heart" id="bt__like-icon"></i>
            </div>
          }

          {filteredBookmarks.length ?
            <div className="bt__option bt__bookmark" onClick={handleBookmarkDelete}>
              <i className="fas fa-bookmark" id="bt__bookmark-icon" style={{ color: "gold" }}></i>
            </div>
            :
            <div className="bt__option bt__bookmark" onClick={handleBookmarkAdd}>
              <i className="far fa-bookmark" id="bt__bookmark-icon"></i>
            </div>
          }
        </div>
      </div>


    </div>
  )
}

export default BigTweet;