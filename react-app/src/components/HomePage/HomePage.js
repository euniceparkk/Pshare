import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllTweets, addOneTweet } from '../../store/tweet';
import ActivityBar from "./ActivityBar";
import './HomePage.css'
import Tweet from "./Tweet/Tweet";

function HomePage() {
  const dispatch = useDispatch();
  const [tweetContent, setTweetContent] = useState("");

  const user = useSelector(state => state.session.user);
  const user_id = user.id;

  const allTweets = useSelector(state => {
    const tweet = Object.values(state.tweet)
    return tweet.reverse()
  })

  // console.log("tweet", allTweets)
  // console.log("user id!", user.id)

  useEffect(() => {
    dispatch(loadAllTweets())
  }, [dispatch])

  const updateTweet = (e) => {
    setTweetContent(e.target.value);
  }

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    const content = tweetContent;
    setTweetContent("");
    dispatch(addOneTweet({ content, user_id }));
  }

  // null is valid JSX so if no tweets, returning nothing
  if (!allTweets) {
    return null;
  };

  return (
    <div className="home-wrapper">
      <div className="home__content-wrapper">

        <div className="home__container-1">
          <h2 id="home__header-1">Home</h2>
        </div>

        <div className="home__container-2">

          <div className="home-profile__container">
            <img alt="profile" src={user.profile_img} id="home-profile__img"></img>
          </div>

          <div className="home-profile__text-container">
            <form onSubmit={handleTweetSubmit}>
              <input
                className="home__tweet-textbox"
                type="textbox"
                name="tweet"
                onChange={updateTweet}
                value={tweetContent}
                placeholder="What's happening?"
              >
              </input>
              <div className="home-profile__submit-container">
                <button type="submit" id="home-profile__submit-btn" className="active">Tweet</button>
              </div>
            </form>
          </div>

        </div>

        <div className="home__extra-container"></div>

        <div className="home__container-3">
          {allTweets && allTweets.map((tweet) => {
            return (
              <div key={tweet.id}>
                <Tweet
                  user_id={user_id}
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
            )
          })}
        </div>

      </div>

      <ActivityBar />
    </div>
  )
}

export default HomePage;