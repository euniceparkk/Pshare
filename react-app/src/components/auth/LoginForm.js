import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    // if (data.errors) {
    // setErrors(user.errors);
    // }
  };

  const demoUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@user.io', 'password'));
    if (data && data.errors) {
      setErrors(data.errors);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <form onSubmit={onLogin} className="login-form__wrapper">
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <input
          className="login-form__email"
          name="email"
          type="text"
          value={email}
          onChange={updateEmail}
          placeholder="Phone, email, or username"
        />
      </div>
      <div>
        <input
          className="login-form__password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <div className="login-form__container-1">
          <button type="submit" id="login__sign-btn" onClick={onLogin}>Log in</button>
          <button type="submit" id="login__demo-btn" onClick={demoUser}>Demo User</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
