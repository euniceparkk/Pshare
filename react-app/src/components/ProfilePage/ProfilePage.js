import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ActivityBar from '../HomePage/ActivityBar';
import Tweet from '../HomePage/Tweet/Tweet';
import { getOneUser, updateOneUser } from '../../store/user';
import { Modal } from '../../context/Modal';
// import { loadAllLikes } from '../../store/like';
import './ProfilePage.css';

function ProfilePage() {
  const dispatch = useDispatch();

  const [showTweets, setShowTweets] = useState(true);
  const [showReplies, setShowReplies] = useState(false);
  const [showLikes, setShowLikes] = useState(false);

  const [showEditProfile, setShowEditProfile] = useState(false);

  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateBio, setUpdateBio] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");

  const sessionUser = useSelector(state => state.session.user);
  // const userTweets = user.tweets;
  // console.log('userTweets', userTweets)

  const { id } = useParams();
  const user = useSelector(state => Object.values(state.user)[0]);
  // console.log('one user!', user)

  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch])

  useEffect(() => {
    if (user) {
      setUpdateFirstName(user.first_name)
      setUpdateLastName(user.last_name)
      setUpdateBio(user.bio)
      setUpdateLocation(user.location)
    }
  }, [user])

  // const allLikes = useSelector(state => {
  //   const like = Object.values(state.like)
  //   return like
  // })
  // console.log("likes", allLikes)

  // useEffect(() => {
  //   dispatch(loadAllLikes())
  // }, [dispatch])

  const handleTweetChange = (e) => {
    // console.log('in the bar', e.target.id)
    setShowReplies(showReplies);
    setShowTweets(showTweets);
    setShowLikes(showLikes);
  }

  const handleReplyChange = (e) => {
    // console.log('in the bar', e.target.id);
    setShowReplies(!showReplies);
    setShowTweets(!showTweets)
    setShowLikes(showLikes)
  }

  const handleLikeChange = (e) => {
    // console.log('in the bar', e.target.id);
    setShowLikes(!showLikes)
    setShowTweets(!showTweets)
    setShowReplies(showReplies);
  }

  if (!user) {
    return null;
  };

  const userTweets = user.tweets
  // console.log('tweets', tee)
  const userLikes = user.likes
  // console.log('userLikes', userLikes)
  const userReplies = user.replies
  // console.log('userReplies', userReplies)

  if (!userTweets) {
    return null;
  };

  if (!userLikes) {
    return null;
  };

  if (!userReplies) {
    return null;
  };

  const handleEditModal = (e) => {
    e.preventDefault();
    setShowEditProfile(!showEditProfile);
  }

  const handleEditModalExit = (e) => {
    e.preventDefault();
    setShowEditProfile(false);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    const first_name = updateFirstName;
    const last_name = updateLastName;
    const bio = updateBio;
    const location = updateLocation;

    if (first_name === "") {
      return null
    } else if (last_name === "") {
      return null
    } else if (bio === "") {
      return null
    } else if (location === "") {
      return null
    }

    const info = {
      first_name, last_name, bio, location
    }

    await dispatch(updateOneUser(id, info));
    setShowEditProfile(false);
  }

  return (
    <div className="profile-wrapper">
      <div className="profile__content-wrapper">

        <div className="profile__container-1">
          <div>
            <NavLink to="/home" exact={true}>
              <i className="fas fa-arrow-left" id="profile-c1__back-arrow"></i>
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
          <div className="profile-c2__container1">
            <img alt="profile cover" src={user.cover_img} id="profile-c2__cover-img"></img>
            {sessionUser.id === user.id &&
              <div className="profile-c2__edit-container">
                <button id="profile-c2__edit-button" onClick={handleEditModal}>Edit profile</button>
              </div>
            }
          </div>

          {showEditProfile && sessionUser.id === user.id &&
            <div>
              <Modal onClose={() => setShowEditProfile(false)}>
                <form onSubmit={handleEditSubmit}>
                  <div>
                    <input
                      type="textbox"
                      placeholder="First name"
                      onChange={(e) => setUpdateFirstName(e.target.value)}
                      value={updateFirstName}
                    >
                    </input>
                  </div>
                  <div>
                    <input
                      type="textbox"
                      placeholder="Last name"
                      onChange={(e) => setUpdateLastName(e.target.value)}
                      value={updateLastName}
                    >
                    </input>
                  </div>
                  <div>
                    <input
                      type="textbox"
                      placeholder="Bio"
                      onChange={(e) => setUpdateBio(e.target.value)}
                      value={updateBio}
                    >
                    </input>
                  </div>
                  <div>
                    <input
                      type="textbox"
                      placeholder="Location"
                      onChange={(e) => setUpdateLocation(e.target.value)}
                      value={updateLocation}
                    >
                    </input>
                  </div>

                  <button type="button" onClick={handleEditModalExit}>
                    <i className="fas fa-times"></i>
                  </button>
                  <div>Edit profile</div>
                  <button type="submit">Save</button>

                </form>
              </Modal>
            </div>
          }

          <img alt="profile" src={user.profile_img} id="profile-c2__profile-img"></img>

          <div className="profile-c2__container2">
            <div className="pc2__name-container">
              <div id='pc2__name'>{user.first_name} {user.last_name}</div>
              <div id="pc2__username">@{user.username}</div>
            </div>

            <div className="pc2__info-container">
              <div id="pc2__bio">{user.bio}</div>

              <div className="pc2__icon-container">
                <div className="pc2-icon__text">
                  <i className="fas fa-map-marker-alt pc2-icon"></i>
                  {user.location}
                </div>
                <div className="pc2-icon__text">
                  <i className="fas fa-birthday-cake pc2-icon"></i>
                  {user.birthday}
                </div>
                <div className="pc2-icon__text">
                  <i className="far fa-calendar-alt pc2-icon"></i>
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
                {/* {console.log('tweet', tweet)} */}
                <Tweet
                  user_id={user.id}
                  tweet_userId={tweet.user_id}
                  tweet_id={tweet.id}
                  tweetsReplies={tweet.replies}
                  tweetsLikes={tweet.likes}
                  tweetsBookmarks={tweet.bookmarks}
                  tweetsUser={tweet.user}
                  tweetCreated={tweet.created_at}
                  tweetContent={tweet.content}
                // onClick={handleTweetChange}
                />
              </div>
            )
          })}
        </div>

        <div>
          {showReplies && userReplies && userReplies.map((reply) => {
            return (
              <div key={reply.id}>
                {console.log('replied tweet', reply)}
                {console.log('original tweet', reply.tweet)}
                <Tweet
                  user_id={user.id}
                  tweet_userId={reply.user_id}
                  tweet_id={reply.id}
                  tweetsReplies={reply.tweet.replies}
                  tweetsLikes={reply.tweet.likes}
                  tweetsBookmarks={reply.tweet.bookmarks}
                  tweetsUser={reply.tweet.user}
                  tweetCreated={reply.created_at}
                  tweetContent={reply.content}
                  repliedTweet={reply.tweet}
                />
              </div>
            )
          })}
        </div>

        <div>
          {showLikes && userLikes && userLikes.map((like) => {
            return (
              <div key={like.id}>
                {console.log('inside like', like)}
                <Tweet
                  user_id={user.id}
                  tweet_userId={like.user_id}
                  tweet_id={like.tweet_id}
                  tweetsReplies={like.tweet.replies}
                  tweetsLikes={like.tweet.likes}
                  tweetsBookmarks={like.tweet.bookmarks}
                  tweetsUser={like.tweet.user}
                  tweetCreated={like.created_at}
                  tweetContent={like.tweet.content}
                />
              </div>
            )
          })}
        </div>

      </div>
      <ActivityBar />
    </div>
  )
}

export default ProfilePage;