import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from "../../store/session"

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
    <form onSubmit={onSignUp}>
      <div>
        <input
          type="text"
          name="first_name"
          onChange={updateFirstName}
          value={firstName}
          placeholder="First Name"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="last_name"
          onChange={updateLastName}
          value={lastName}
          placeholder="Last Name"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="last_name"
          onChange={updateUsername}
          value={username}
          placeholder="Username"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          placeholder="Email"
        ></input>
      </div>
      <div>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          placeholder="Password"
        ></input>
      </div>
      <div>
        <input
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
          type="birthday"
          name="birthday"
          onChange={updateBirthday}
          value={birthday}
          required={true}
          placeholder="MM/DD/YYYY"
        ></input>
      </div>
      <button type="submit">Sign Up</button>

    </form>
  );
};

export default SignUpForm;
