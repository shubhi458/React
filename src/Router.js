import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import App from './App';
import Login from './Login';
import NotFound from './NotFound';

export default () => {
    return (
      <Router>
          <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/app">
            <App />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    )
}