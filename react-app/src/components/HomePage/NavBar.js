import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import yellowBird from '../../images/bird-yellow.png';
import { Modal } from '../../context/Modal';
import { addOneTweet } from "../../store/tweet";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [showTweetModal, setShowTweetModal] = useState(false);
  const [tweetContent, setTweetContent] = useState("");

  const user_id = useSelector(state => state.session.user);

  const handleTweetModal = (e) => {
    e.preventDefault();
    setShowTweetModal(!showTweetModal);
  };

  const updateTweet = (e) => {
    setTweetContent(e.target.value);
  }

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    const content = tweetContent;
    setTweetContent("");
    setShowTweetModal(!showTweetModal);
    dispatch(addOneTweet({ content, user_id }));
  }

  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <img alt="Pshare bird" id="nav__bird-image" src={yellowBird}></img>
        </li>
        <li>
          <i className="fas fa-home nav__icons"></i>
          <NavLink to="/home" exact={true} activeClassName="active" className="nav__all-links">
            Home
          </NavLink>
        </li>
        <li>
          <i className="fas fa-hashtag nav__icons"></i>
          <NavLink to="/explore" exact={true} activeClassName="active" className="nav__all-links">
            Explore
          </NavLink>
        </li>
        <li>
          <i className="far fa-bell nav__icons"></i>
          <NavLink to="/notifications" exact={true} activeClassName="active" className="nav__all-links">
            Notifications
          </NavLink>
        </li>
        <li>
          <i className="far fa-envelope nav__icons"></i>
          <NavLink to="/bookmarks" exact={true} activeClassName="active" className="nav__all-links">
            Bookmarks
          </NavLink>
        </li>
        <li>
          <i className="far fa-user nav__icons"></i>
          <NavLink to="/profile" exact={true} activeClassName="active" className="nav__all-links">
            Profile
          </NavLink>
        </li>
        <li>
          <i className="fas fa-spinner nav__icons"></i>
          <button>More</button>
        </li>
        <li>
          <button id="nav__tweet-btn" onClick={handleTweetModal}>Tweet</button>
        </li>

        {showTweetModal &&
          <div>
            <Modal onClose={() => setShowTweetModal(false)}>
              <div>
                <form onSubmit={handleTweetSubmit}>
                  <div>
                    <input
                      type="textbox"
                      name="tweet"
                      onChange={updateTweet}
                      value={tweetContent}
                      placeholder="What's happening?"
                    >
                    </input>
                    <button type="submit">Tweet</button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        }

        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;