import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/HomePage/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import SignupPage from "./components/auth/SignupPage";
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact={true}>
        </Route> */}

        <Route path="/signup" exact={true}>
          <SignupPage />
        </Route>

        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>

        <ProtectedRoute path="/home" exact={true}>
          <NavBar />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/explore" exact={true}>
          <NavBar />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/notifications" exact={true}>
          <NavBar />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/bookmarks" exact={true}>
          <NavBar />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/profile" exact={true}>
          <NavBar />
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
