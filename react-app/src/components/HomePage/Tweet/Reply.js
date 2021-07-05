import React, { useState } from 'react';
import './Reply.css';
import { useDispatch } from 'react-redux';
import { removeOneReply } from "../../../store/reply"
import { NavLink } from 'react-router-dom';

function Reply({ originalTweetUser, repliedTweetsUsername, tweet_id, tweet_userId, user_id, tweetsUser, tweetCreated, tweetContent }) {
  const dispatch = useDispatch();
  const [currentReply, setCurrentReply] = useState();
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const handleReplyDelete = async () => {
    await dispatch(removeOneReply(currentReply))
  }

  const handleDropdown = () => {
    setShowOptionsDropdown(!showOptionsDropdown);
  }

  return (
    <div className="reply__wrapper">

      <div className="reply-container-1">
        <NavLink to={`/profile/${tweetsUser.id}`}>
          <img alt="profile" src={tweetsUser.profile_img} id="reply__profile-img"></img>
        </NavLink>

        <div className="flexing-dot">
          <div className="reply-c1__flex-1">
            <div className="reply__profile">
              <NavLink to={`/profile/${tweetsUser.id}`}>
                <div id="reply__full-name">
                  {tweetsUser.first_name} {tweetsUser.last_name}
                </div>
              </NavLink>
              <div id="reply__username">
                @{tweetsUser.username} • {(tweetCreated).slice(5, -18)}
              </div>
            </div>

            <div id="reply__replied-text">Replying to
              <NavLink to={`/profile/${originalTweetUser}`}>
                <span id="reply__replied-link">@{repliedTweetsUsername}</span>
              </NavLink>
            </div>
          </div>

          <div id="reply__dot">
            <button type="button" id="reply__options-button" onClick={() => {
              handleDropdown()
              setCurrentReply(tweet_id)
            }}>
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>

        {showOptionsDropdown && user_id === tweet_userId &&
          <div className="bt__one-option">
            <button type="button" onClick={handleReplyDelete} id="bt__delete-button">
              <i className="far fa-trash-alt trash-icon"></i>
              Delete
            </button>
          </div>
        }

      </div>

      <div className="reply-container-2">
        {tweetContent}
      </div>

    </div>
  )
}

export default Reply;