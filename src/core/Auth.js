import React from "react";
import AuthContext from "../configs/authContext";

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    const user = sessionStorage.getItem("user");
    this.state = {
      user: user ? JSON.parse(user) : undefined,
      login: this.login,
      logout: this.logout,
    };
  }

  login = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({ user: user });
  };

  logout = () => {
    sessionStorage.removeItem("user");
    this.setState({ user: undefined });
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
