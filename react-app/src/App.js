import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/HomePage/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import SignupPage from "./components/auth/SignupPage";
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

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


        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <NavBar />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/explore" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/notifications" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/bookmarks" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/profile" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
