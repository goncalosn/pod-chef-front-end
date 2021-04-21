import "./App.css";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    //TODO: this
    this.state = {
      deployments: [],
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
        </Switch>
      </Router>
    );
  }
}
