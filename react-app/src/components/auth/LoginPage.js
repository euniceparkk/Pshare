import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

function LoginPage() {
  return (
    <div>
      <LoginForm />
      <NavLink to={`/signup`}>Sign up for Twitter</NavLink>
    </div>
  )
}

export default LoginPage