import "./App.css";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Node from "../pages/Node/Node";

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
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
          <Route path="/dashboard" exact={true}>
            <Dashboard />
          </Route>
          <Route path="/dashboard/:name" component={Node} />
        </Switch>
      </Router>
    );
  }
}