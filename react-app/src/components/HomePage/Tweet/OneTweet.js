import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ActivityBar from '../ActivityBar';
import { loadOneTweet } from '../../../store/tweet';
import './OneTweet.css';
import Tweet from './Tweet';
import { addOneReply } from '../../../store/reply';

function OneTweet() {
  const dispatch = useDispatch();
  const [replyContent, setReplyContent] = useState("");

  const { id } = useParams();
  const tweet = useSelector(state => Object.values(state.tweet)[0]);
  const sessionUser = useSelector(state => state.session.user);
  // console.log('tweet', tweet)

  useEffect(() => {
    dispatch(loadOneTweet(id))
  }, [dispatch])

  if (!tweet) {
    return null;
  };

  const tweetReplies = tweet.replies;
  // console.log('reply', tweetReplies)

  if (!tweetReplies) {
    return null;
  };

  const updateReply = (e) => {
    setReplyContent(e.target.value);
  }

  const handleReplySubmit = (e) => {
    // console.log('testing')
    e.preventDefault();
    const user_id = sessionUser.id;
    const content = replyContent;
    const tweet_id = id;

    setReplyContent("");
    dispatch(addOneReply({ user_id, content, tweet_id }))
  }

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
          <div key={tweet.id}>
            {/* {console.log('tweet1', tweet)} */}
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


        <div className="single__container-3">
          <div>Tweet here</div>
          <form onSubmit={handleReplySubmit}>
            <input
              className="single__reply-textbox"
              type="textbox"
              onChange={updateReply}
              value={replyContent}
              placeholder="Tweet your reply"
            >
            </input>
            <button type="submit">Reply</button>
          </form>
        </div>


        <div className="single__container-4">
          {tweetReplies.length && tweetReplies.map((tweet) => {
            return (
              <div key={tweetReplies.id}>
                {/* {console.log('replytweet!!', tweet)} */}
                <Tweet
                  user_id={sessionUser.id}
                  tweet_userId={tweet.user_id}
                  tweet_id={tweet.id}
                  tweetsReplies={tweet.tweet.replies}
                  tweetsLikes={tweet.tweet.likes}
                  tweetsBookmarks={tweet.tweet.bookmarks}
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

export default OneTweet;