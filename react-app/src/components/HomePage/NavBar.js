import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css";
import yellowBird from '../../images/bird-yellow.png';

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <img alt="Pshare bird" id="nav__bird-image" src={yellowBird}></img>
        </li>
        <li>
          <i class="fas fa-home nav__icons"></i>
          <NavLink to="/home" exact={true} activeClassName="active" className="nav__all-links">
            Home
          </NavLink>
        </li>
        <li>
          <i class="fas fa-hashtag nav__icons"></i>
          <NavLink to="/explore" exact={true} activeClassName="active" className="nav__all-links">
            Explore
          </NavLink>
        </li>
        <li>
          <i class="far fa-bell nav__icons"></i>
          <NavLink to="/notifications" exact={true} activeClassName="active" className="nav__all-links">
            Notifications
          </NavLink>
        </li>
        <li>
          <i class="far fa-envelope nav__icons"></i>
          <NavLink to="/bookmarks" exact={true} activeClassName="active" className="nav__all-links">
            Bookmarks
          </NavLink>
        </li>
        <li>
          <i class="far fa-user nav__icons"></i>
          <NavLink to="/profile" exact={true} activeClassName="active" className="nav__all-links">
            Profile
          </NavLink>
        </li>
        <li>
          <i class="fas fa-spinner nav__icons"></i>
          <buton>More</buton>
        </li>
        <li>
          <button id="nav__tweet-btn">Tweet</button>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;