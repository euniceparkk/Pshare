import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ActivityBar from '../HomePage/ActivityBar';
import Tweet from '../HomePage/Tweet/Tweet';
import './ProfilePage.css';

function ProfilePage() {
  const [showTweets, setShowTweets] = useState(true);
  const [showReplies, setShowReplies] = useState(false);
  const [showLikes, setShowLikes] = useState(false);

  const user = useSelector(state => state.session.user);
  const userTweets = user.tweets;

  // GET all likes/replies thru store instead
  // const userLikes = user.likes;
  // console.log('user', user)
  // console.log('userTweets', userTweets)
  // console.log('userLikes', userLikes)

  const handleTweetChange = (e) => {
    console.log('in the bar', e.target.id)
    setShowReplies(showReplies);
    setShowTweets(showTweets);
    setShowLikes(showLikes);
  }

  const handleReplyChange = (e) => {
    console.log('in the bar', e.target.id);
    setShowReplies(!showReplies);
    setShowTweets(!showTweets)
    setShowLikes(showLikes)
  }

  const handleLikeChange = (e) => {
    console.log('in the bar', e.target.id);
    setShowLikes(!showLikes)
    setShowTweets(!showTweets)
    setShowReplies(showReplies);
  }

  console.log('user', user)
  // console.log('user tweets', userTweets)

  if (!userTweets) {
    return null;
  };

  return (
    <div className="profile-wrapper">
      <div className="profile__content-wrapper">

        <div className="profile__container-1">
          <div>
            <NavLink to="/home" exact={true}>
              <i class="fas fa-arrow-left" id="profile-c1__back-arrow"></i>
            </NavLink>
          </div>

          <div className="profile-c1__flex-container">
            <div id="profile-c1__name">
              {user.first_name} {user.last_name}
            </div>
            <div id="profile-c1__tweet-count">{userTweets.length} Tweets</div>
          </div>

        </div>

        <div className="profile__container-2">
          {/* <h1>hello</h1> */}
          <div className="profile-c2__container1">
            <img src={user.cover_img} id="profile-c2__cover-img"></img>
          </div>

          <img src={user.profile_img} id="profile-c2__profile-img"></img>

          <div className="profile-c2__container2">
            <div className="pc2__name-container">
              <div id='pc2__name'>{user.first_name} {user.last_name}</div>
              <div id="pc2__username">@{user.username}</div>
            </div>

            <div className="pc2__info-container">
              <div id="pc2__bio">{user.bio}</div>

              <div className="pc2__icon-container">
                <div className="pc2-icon__text">
                  <i class="fas fa-map-marker-alt pc2-icon"></i>
                  {user.location}
                </div>
                <div className="pc2-icon__text">
                  <i class="fas fa-birthday-cake pc2-icon"></i>
                  {user.birthday}
                </div>
                <div className="pc2-icon__text">
                  <i class="far fa-calendar-alt pc2-icon"></i>
                  Joined {(user.created_at).slice(8, -13)}
                </div>
              </div>

              <div>
                <span className="pc2-follower-num">{user.followed_users.length}</span>
                <span className="pc2-follower-txt">Following</span>
                <span className="pc2-follower-num">{user.users_followers.length}</span>
                <span className="pc2-follower-txt">Followers</span>
              </div>
            </div>
          </div>

        </div>

        <div className="profile__container-3">
          <div className="pc3-link" onClick={handleTweetChange}>Tweets</div>
          <div className="pc3-link" onClick={handleReplyChange}>Replies</div>
          <div className="pc3-link" onClick={handleLikeChange}>Likes</div>
        </div>

        <div>
          {showTweets && userTweets && userTweets.map((tweet) => {
            return (
              <div key={tweet.id}>
                <Tweet
                  user_id={user.id}
                  tweet={tweet}
                  onClick={handleTweetChange}
                />
              </div>
            )
          })}
        </div>

        <div>
          {showReplies &&
            <div>
              <h1>Replies</h1>
            </div>
          }
        </div>

        <div>
          {showLikes &&
            <div>
              <h1>Likes</h1>
            </div>
          }
        </div>

      </div>
      <ActivityBar />
    </div>
  )
}

export default ProfilePage;