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
  const [showLogout, setShowLogout] = useState(false);

  const user_id = useSelector(state => state.session.user);
  const id = user_id.id;

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

  const handleLogout = () => {
    setShowLogout(!showLogout)
  }

  return (
    <nav className="nav-wrapper">
      <div>
        <img alt="Pshare bird" id="nav__bird-image" src={yellowBird}></img>
      </div>
      <ul className="nav__li-wrapper">

        <li>
          <div className='nav-hover'>
            <i className="fas fa-home nav__icons"></i>
            <NavLink to="/home" exact={true} activeClassName="active" className="nav__all-links">
              Home
          </NavLink>
          </div>
        </li>

        <li>
          <div className='nav-hover'>
            <i className="fas fa-hashtag nav__icons"></i>
            <NavLink to="/explore" exact={true} activeClassName="active" className="nav__all-links">
              Explore
          </NavLink>
          </div>
        </li>

        <li>
          <div className='nav-hover'>
            <i className="far fa-bell nav__icons"></i>
            <NavLink to="/notifications" exact={true} activeClassName="active" className="nav__all-links">
              Notifications
          </NavLink>
          </div>
        </li>

        <li>
          <div className='nav-hover'>
            <i className="far fa-envelope nav__icons"></i>
            <NavLink to="/bookmarks" exact={true} activeClassName="active" className="nav__all-links">
              Bookmarks
            </NavLink>
          </div>
        </li>

        <li>
          <div className='nav-hover'>
            <i className="far fa-user nav__icons"></i>
            <NavLink to={`/profile/${id}`} exact={true} activeClassName="active" className="nav__all-links">Profile</NavLink>
          </div>
        </li>

        <li>
          <div className='nav-hover'>
            <i className="fas fa-spinner nav__icons"></i>
            <button id="nav__more-btn">More</button>
          </div>
        </li>

      </ul>

      {showTweetModal &&
        <div>
          <Modal onClose={() => setShowTweetModal(false)}>
            <div>
              <form onSubmit={handleTweetSubmit}>
                <div>
                  <input
                    type="textbox"
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

      <div className="nav__div2-wrapper">
        <div>
          <button id="nav__tweet-btn" onClick={handleTweetModal}>Tweet</button>
        </div>

        <div className="nav__user-container" onClick={handleLogout}>
          <div className="nav__img-container">
            <img alt="profile" src={user_id.profile_img} id="nav__profile-img"></img>
          </div>
          <div className="nav__name-container">
            <div id="nav__full-name">{user_id.first_name} {user_id.last_name}</div>
            <div id="nav__username">@{user_id.username}</div>
          </div>
          <div className="nav__dot-container">
            <i className="fas fa-ellipsis-h" id="nav__dot"></i>
          </div>
        </div>

        {showLogout &&
          <div className="nav__one-option">
            <LogoutButton username={user_id.username} />
          </div>
        }

        {/* <div>
          <LogoutButton />
        </div> */}
      </div>

    </nav>
  );
}

export default NavBar;