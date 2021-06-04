import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './HomePage.css'
import { loadAllTweets } from '../../store/tweet';

function HomePage() {
  const [tweetContent, setTweetContent] = useState("");
  // const user = useSelector(state => state.session.user.id);
  const dispatch = useDispatch();
  // console.log('user', user)

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
              <div className="home-tweet__container" key={tweet.id}>

                <div className="home-tweet__profile-container">
                  <img src={tweet.user.profile_img} id="home-tweet__profile-img"></img>
                </div>

                <div className="home-tweet__user-container">
                  <div id="home-tweet__full-name">
                    {tweet.user.first_name} {tweet.user.last_name}
                  </div>
                  <div id="home-tweet__username">
                    @{tweet.user.username} • {tweet.created_at}
                  </div>
                </div>

                <div className="home-tweet__content-container">
                  {tweet.content}
                </div>

                <div className="home-tweet__options-container">

                  <div className="home-tweet__option home-tweet__comment">
                    <i className="far fa-comment" id="home-tweet__comment-icon"></i>
                    {tweet.replies.length}
                  </div>

                  <div className="home-tweet__option home-tweet__like">
                    <i className="far fa-heart" id="home-tweet__like-icon"></i>
                    {tweet.likes.length}
                  </div>

                  <div className="home-tweet__option home-tweet__bookmark">
                    <i className="far fa-bookmark" id="home-tweet__bookmark-icon"></i>
                    {tweet.bookmarks.length}
                  </div>

                </div>

                <div className="home-tweet__dropdown-container">
                  <i class="fas fa-ellipsis-h"></i>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage;