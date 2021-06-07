import React from 'react';
import { useSelector } from 'react-redux';
import ActivityBar from '../HomePage/ActivityBar';
import Tweet from '../HomePage/Tweet/Tweet';
import './ProfilePage.css';

function ProfilePage() {
  const user = useSelector(state => state.session.user);
  const userId = user.id;
  const userTweets = user.tweets;
  // console.log('user!', user)
  // console.log('user tweets', user_tweets)

  if (!userTweets) {
    return null;
  };

  return (
    <div className="profile-wrapper">
      <div className="profile__content-wrapper">

        <div>
          {userTweets && userTweets.map((tweet) => {
            return (
              <div>
                <Tweet user_id={userId} tweet={tweet} key={tweet.id} />
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