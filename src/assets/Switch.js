import React from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default class CustomSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: localStorage.theme ? true : false,
    };
  }

  componentDidMount() {
    if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
  }

  handler() {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
    }
  }

  render() {
    return (
      <>
        <SunIcon className="flex-shrink-0 h-6 w-6" />
        <Switch
          checked={this.state.enabled}
          onChange={() => {
            this.setState({ enabled: !this.state.enabled });
            this.handler();
          }}
          className={`${
            this.state.enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 mx-2`}
        >
          <span
            className={`${
              this.state.enabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        <MoonIcon className="flex-shrink-0 h-6 w-6" />
      </>
    );
  }
}
