import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from 'react-router-dom';
import yellowBird from '../../images/bird-yellow.png';
import { signUp } from "../../store/session"
import './SignUpForm.css'

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const user = useSelector(state => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(firstName, lastName, username, email, password, birthday));
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateBirthday = (e) => {
    setBirthday(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />
  }

  return (
    <div>
      <img alt="Pshare bird" id="signup__bird-image" src={yellowBird}></img>
      <div id="create-account">Create your account</div>

      <form onSubmit={onSignUp} className="signup-form">
        <div className="signup-form__name-flex">
          <input
            className="signup-form__textbox-name"
            type="text"
            name="first_name"
            onChange={updateFirstName}
            value={firstName}
            placeholder="First Name"
          ></input>
          <input
            className="signup-form__textbox-name"
            type="text"
            name="last_name"
            onChange={updateLastName}
            value={lastName}
            placeholder="Last Name"
          ></input>
        </div>
        <div>
          <input
            className="signup-form__textbox"
            type="text"
            name="last_name"
            onChange={updateUsername}
            value={username}
            placeholder="Username"
          ></input>
        </div>
        <div>
          <input
            className="signup-form__textbox"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <input
            className="signup-form__textbox"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Password"
          ></input>
        </div>
        <div>
          <input
            className="signup-form__textbox"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Confirm Password"
          ></input>
        </div>
        <div>
          <input
            className="signup-form__textbox"
            type="birthday"
            name="birthday"
            onChange={updateBirthday}
            value={birthday}
            required={true}
            placeholder="MM/DD/YYYY"
          ></input>
        </div>
        <button type="submit" id="sign-form__button">Sign Up</button>

      </form>

      <div className="signup__container-1">
        <div>Have an account? •</div>
        <NavLink to={`/login`} id="signup__redirect-link">Log in to Pshare</NavLink>
      </div>

    </div>
  );
};

export default SignUpForm;
