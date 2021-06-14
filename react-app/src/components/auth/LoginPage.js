import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import yellowBird from '../../images/bird-yellow.png';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-wrapper">
      <img alt="Pshare bird" id="login__bird-image" src={yellowBird}></img>

      <h1 id="login__header-1">Log in to Pshare</h1>
      <LoginForm />

      <div className="login__container-1">
        <div>Don't have an account? •</div>
        <NavLink to={`/signup`} id="login__redirect-link">Sign up for Pshare</NavLink>
      </div>

    </div>
  )
}

export default LoginPage;