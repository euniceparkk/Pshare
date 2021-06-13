import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import './LogoutButton.css'

const LogoutButton = ({ username }) => {
  const dispatch = useDispatch();

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return <button onClick={onLogout} id="logout-button">Logout @{username}</button>;
};

export default LogoutButton;
