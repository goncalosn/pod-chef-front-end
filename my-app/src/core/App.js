import "./App.css";
import Dashboad from "../pages/dashboard/Dashboard";

import React, { Component } from "react";

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
      <div className="App">
        <Dashboad />
      </div>
    );
  }
}
