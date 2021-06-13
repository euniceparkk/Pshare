import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ActivityBar from '../ActivityBar';
import { loadOneTweet } from '../../../store/tweet';
import './OneTweet.css';
import Tweet from './Tweet';
import { addOneReply } from '../../../store/reply';
import BigTweet from './BigTweet';
import Reply from './Reply';

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
            <BigTweet
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

        <div className="single__container-3" id="jump-reply">
          <img alt="profile" src={sessionUser.profile_img} id="one-tweet__profile-img"></img>
          <form onSubmit={handleReplySubmit} className="single-form__flex-container">
            <input
              className="single__reply-textbox"
              type="textbox"
              onChange={updateReply}
              value={replyContent}
              placeholder="Tweet your reply.."
            >
            </input>
            <button type="submit" id="single__reply-button">Reply</button>
          </form>
        </div>

        <div className="single__extra-container"></div>

        <div className="single__container-4">
          {tweetReplies && tweetReplies.map((tweet) => {
            return (
              // key={`post-${postId}-comment-${commentId}`}
              <div key={`comment-${tweet.id}-comment-${tweet.tweet_id}`}>
                {/* {console.log('replytweet!!', tweet)} */}
                <Reply
                  user_id={sessionUser.id}
                  tweet_userId={tweet.user_id}
                  tweet_id={tweet.id}
                  tweetsReplies={tweet.tweet.replies}
                  tweetsLikes={tweet.tweet.likes}
                  tweetsBookmarks={tweet.tweet.bookmarks}
                  tweetsUser={tweet.user}
                  tweetCreated={tweet.created_at}
                  tweetContent={tweet.content}
                  repliedTweetsUsername={tweet.tweet.user.username}
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