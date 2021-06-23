import React, { Component } from "react";
import "./App.css";

import AuthComponent from "./Auth"
import Router from "./Router";

export default class App extends Component {
  render() {
    return (
      <AuthComponent>
        <Router />
      </AuthComponent>
    );
  }
}
