import React from "react";

const AuthContext = React.createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
