import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "../pages/Home/Home.js";
import Login from "../pages/Login/Login.js";
import Signup from "../pages/Signup/Signup.js";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import Nodes from "../pages/Dashboard/Nodes.js";
import Services from "../pages/Dashboard/Services.js";
import Node from "../pages/Node/Node.js";

export default class App extends Component {
  constructor(props) {
    super(props);
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
          <Route path="/dashboard" exact={true}>
            <Dashboard />
          </Route>
          <Route path="/dashboard/nodes" exact={true}>
            <Dashboard>{Nodes}</Dashboard>
          </Route>
          <Route path="/dashboard/node/:name">
            <Dashboard>{Node}</Dashboard>
          </Route>
          <Route path="/dashboard/services" exact={true}>
            <Dashboard>{Services}</Dashboard>
          </Route>
        </Switch>
      </Router>
    );
  }
}
