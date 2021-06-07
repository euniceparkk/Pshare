import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllTweets, addOneTweet, removeOneTweet } from '../../store/tweet';
import './HomePage.css'

function HomePage() {
  const [tweetContent, setTweetContent] = useState("");
  const user = useSelector(state => state.session.user);
  const user_id = user.id;

  const dispatch = useDispatch();

  const allTweets = useSelector(state => {
    const tweet = Object.values(state.tweet)
    return tweet
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

  // CHANGE TO DROPDOWN MODAL FOR DELETE LATER
  const handleDelete = async (tweet) => {
    console.log("testing")
    // if (tweet.user_id == user_id) {
    await dispatch(removeOneTweet(tweet))
    // }
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
            <img src={user.profile_img} id="home-profile__img"></img>
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

        <div className="home__extra-container">

        </div>

        <div className="home__container-3">
          {allTweets && allTweets.map((tweet) => {
            return (
              <div className="home-tweet__container" key={tweet.id}>
                {console.log({ tweet })}
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
                  <button type="button" onClick={() => handleDelete(tweet.id)}>
                    <i class="fas fa-ellipsis-h"></i>
                  </button>
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