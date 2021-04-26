import React, { Component } from "react";

export default function Hoc(HocComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <HocComponent {...this.props} />;
    }
  };
}
