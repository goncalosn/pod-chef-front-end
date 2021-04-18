import logo from '../assets/logo.svg';
import './App.css';
import Dashboad from '../pages/dashboard/Dashboard';

import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    //TODO: this
    this.state = {
      deployments: [],
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/core/App.js</code> and save to reload.
        </p>
        <Dashboad />
      </header>
    </div>
    )
  }
}

