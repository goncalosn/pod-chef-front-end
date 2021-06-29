import React from "react";

const AuthContext = React.createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export default AuthContext;
