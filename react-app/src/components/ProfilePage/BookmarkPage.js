import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActivityBar from '../HomePage/ActivityBar';
import { loadAllBookmarks } from '../../store/bookmark';
import './BookmarkPage.css'
import Tweet from '../HomePage/Tweet/Tweet';

function BookmarkPage() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const user_id = user.id;
  // console.log('user', user)

  const allBookmarks = useSelector(state => {
    const bookmark = Object.values(state.bookmark)
    return bookmark
  })
  // console.log('all Bookmarks', allBookmarks)

  useEffect(() => {
    dispatch(loadAllBookmarks())
  }, [dispatch])

  return (
    <div className="bookmark-wrapper">
      <div className="bookmark__content-wrapper">

        <div className="bookmark__container-1">
          <div id="bookmark__c1-header">Bookmarks</div>
          <div id="bookmark__c1-username">@{user.username}</div>
        </div>

        <div className="bookmark__container-2">
          {allBookmarks && allBookmarks.map((bookmark) => {
            return (
              <div key={bookmark.id}>
                <Tweet
                  user_id={user_id}
                  tweet_userId={bookmark.user_id}
                  tweet_id={bookmark.tweet_id}
                  tweetsReplies={bookmark.tweet.replies}
                  tweetsLikes={bookmark.tweet.likes}
                  tweetsBookmarks={bookmark.tweet.bookmarks}
                  tweetsUser={bookmark.tweet.user}
                  tweetCreated={bookmark.created_at}
                  tweetContent={bookmark.tweet.content}
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

export default BookmarkPage;