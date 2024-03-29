import React, { useState } from 'react';
import yellowImg from '../../images/yellow.png';
import yellowBird from '../../images/bird-yellow.png';
import { Modal } from '../../context/Modal';
import './SignupPage.css';
import SignUpForm from './SignUpForm';
import { NavLink } from 'react-router-dom';

function SignupPage() {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setShowSignup(!showSignup);
  };

  return (
    <div className="splash-wrapper">

      <div className="splash__container-1">
        <img alt="Pshare" id="splash__main-image" src={yellowImg}></img>
      </div>

      <div className="splash__container-2">
        <img alt="Pshare bird" id="splash__bird-image" src={yellowBird}></img>
        <span id="splash__header-1">Happening now</span>
        <h2 id="splash__header-2">Join Pshare today.</h2>
        <button id="splash__sign-btn" onClick={handleSignup}>Sign up</button>
        <NavLink to={`/login`} exact={true}>
          <button id="splash__log-btn">Log in</button>
        </NavLink>
      </div>

      {showSignup &&
        <div>
          <Modal onClose={() => setShowSignup(false)}>
            <div className="signup-modal">
              <SignUpForm />
            </div>
          </Modal>
        </div>
      }

      <footer className="splash__container-3">
        <div className="splash__footer">Developer: Eunice Park</div>
        <a href="https://www.linkedin.com/in/euniceparkk/" rel="noopener noreferrer" target="_blank" className="splash__links splash__footer">
          LinkedIn
          <i className="fab fa-linkedin splash__icons" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/euniceparkk" rel="noopener noreferrer" target="_blank" className="splash__links splash__footer">
          GitHub
            <i className="fab fa-github splash__icons" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/euniceparkk/Pshare" rel="noopener noreferrer" target="_blank" className="splash__links splash__footer">
          Pshare GitHub Repository
          <i className="fab fa-github splash__icons" aria-hidden="true"></i>
        </a>
        <div className="splash__footer">© 2021 Pshare, Inc.</div>
      </footer>
    </div>
  )
}

export default SignupPage;