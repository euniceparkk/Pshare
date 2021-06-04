import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './HomePage.css'
import { loadAllTweets } from '../../store/tweet';

function HomePage() {
  const [tweetContent, setTweetContent] = useState("");
  const dispatch = useDispatch();

  const allTweets = useSelector(state => {
    const tweet = Object.values(state.tweet)
    return tweet
  })
  console.log(allTweets)

  useEffect(() => {
    dispatch(loadAllTweets())
  }, [dispatch])

  const updateTweet = (e) => {
    setTweetContent(e.target.value);
  }

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
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
          <div>hello</div>
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
            <button type="submit">Tweet</button>
          </form>
        </div>

        <div className="home__container-3">
          {allTweets && allTweets.map((tweet) => {
            return (
              <div className="one-tweet__container" key={tweet.id}>
                <img src={tweet.user.profile_img}></img>
                {tweet.user.first_name} {tweet.user.last_name}
                @ {tweet.user.username}
                {/* {tweet.content} */}
                {/* {tweet.created_at} */}
              </div>
            )
          })}
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>

        </div>
      </div>
    </div>
  )
}

export default HomePage;