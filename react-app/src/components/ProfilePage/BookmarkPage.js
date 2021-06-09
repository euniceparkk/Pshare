import React from 'react';
import { useSelector } from 'react-redux';
import ActivityBar from '../HomePage/ActivityBar';
import './BookmarkPage.css'

function BookmarkPage() {
  const user = useSelector(state => state.session.user);
  console.log('user', user)

  return (
    <div className="bookmark-wrapper">
      <div className="bookmark__content-wrapper">

        <div className="bookmark__container-1">
          <div id="bookmark__c1-header">Bookmarks</div>
          <div id="bookmark__c1-username">@{user.username}</div>
        </div>

        <div className="bookmark__container-2">
          <div>hello</div>
          <div>eunice</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>

        </div>

      </div>
      <ActivityBar />
    </div>
  )
}

export default BookmarkPage;