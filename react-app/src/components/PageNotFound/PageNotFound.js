import React from 'react';
import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
import logo from '../../images/pshare-logo.png';
import yellowBird from '../../images/bird-yellow.png';

const PageNotFound = () => {
  return (
    <div>
      <div className="error-container">
        <div className="error-text__container">
          <h2 className='error-header1'>404</h2>
          <h2 className='error-header2'>Page Not Found</h2>
          <h4 id='error-txt'>Hmmm...this page doesn't exist. Try searching for something else.</h4>
          <NavLink to="/home" className='error-link'>
            <div id="error-link__text">
              Go Home
            </div>
          </NavLink>
        </div>

        <div className='error-image__container'>
          <img alt='error' id="error__bird-image" src={yellowBird}></img>
          <img alt='error' className='error-image' src={logo}></img>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound