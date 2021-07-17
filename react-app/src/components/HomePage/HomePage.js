import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllTweets, addOneTweet } from '../../store/tweet';
import ActivityBar from "./ActivityBar";
import './HomePage.css'
import Tweet from "./Tweet/Tweet";

function HomePage() {
  const dispatch = useDispatch();
  const [tweetContent, setTweetContent] = useState("");
  const [imageContent, setImageContent] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

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

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImageContent(file)
  }

  const handleTweetSubmit = async (e) => {
    e.preventDefault();
    const content = tweetContent;
    const image = imageContent;

    if (image !== "") {
      setImageLoading(true);

      const res = await dispatch(addOneTweet({ content, user_id, image }));

      if (res.ok) {
        await res.json()
        imageLoading(false);
      } else {
        setImageLoading(false);
        console.log("error");
      }

      setTweetContent("");
      setImageContent("");
    } else {
      dispatch(addOneTweet({ content, user_id }))
      setTweetContent("");
    }

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
                onChange={updateTweet}
                value={tweetContent}
                placeholder="What's happening?"
              >
              </input>

              <div id='tweet-image__container'>
                <input
                  className="home__tweet-image"
                  type="file"
                  onChange={updateImage}
                  accept="image/*"
                  placeholder="Choose an image!"
                >
                </input>
                {imageLoading && <p id="loading-txt">Image loading . . .</p>}
              </div>

              <div className="home-profile__submit-container">
                <button type="submit" id="home-profile__submit-btn" className="active">Tweet</button>
              </div>
            </form>
          </div>
        </div>

        <div className="home__extra-container"></div>

        <div className="home__container-3">
          {allTweets && allTweets.map((tweet) => {
            // console.log('tweet', tweet)
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
                  image={tweet.image}
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