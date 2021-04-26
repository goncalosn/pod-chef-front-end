import React from "react";
import Navbar from "../../assets/Navbar.js";
import Sidebar from "./Sidebar";
import Nodes from "./Nodes.js";
import Hoc from "./HOC.js";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: Hoc(Nodes) };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      current: Hoc(e),
    });
  };

  render() {
    return (
      <div className="h-screen">
        <Navbar />
        <div className="flex w-full px-4 py-4" style={{ height: "90%" }}>
          <Sidebar handle={this.handleClick} />
          <div className="flex flex-wrap h-full w-full">
            <div className="h-full w-full rounded-lg shadow-md p-4 overflow-y-auto">
              <this.state.current />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Exe = Hoc(Nodes);
