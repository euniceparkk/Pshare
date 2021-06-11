import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ActivityBar from '../ActivityBar';
import { loadOneTweet } from '../../../store/tweet';
import './OneTweet.css';
import Tweet from './Tweet';

function OneTweet() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const tweet = useSelector(state => Object.values(state.tweet)[0]);
  const sessionUser = useSelector(state => state.session.user);
  console.log('tweet', tweet)

  useEffect(() => {
    dispatch(loadOneTweet(id))
  }, [dispatch])

  if (!tweet) {
    return null;
  };

  return (
    <div className="single__wrapper">
      <div className="single__content-wrapper">

        <div className="single__container-1">
          <div>
            <NavLink to="/home" exact={true}>
              <i className="fas fa-arrow-left" id="single-c1__back-arrow"></i>
            </NavLink>
          </div>
          <div id="single-c1__text">Tweet</div>
        </div>

        <div className="single__container-2">
          <Tweet
            user_id={sessionUser.id}
            tweet_userId={tweet.user_id}
            tweet_id={tweet.id}
            tweetsReplies={tweet.replies}
            tweetsLikes={tweet.likes}
            tweetsBookmarks={tweet.bookmarks}
            tweetsUser={tweet.user}
            tweetCreated={tweet.created_at}
            tweetContent={tweet.content}
          />
        </div>

      </div>
      <ActivityBar />
    </div>
  )
}

export default OneTweet;