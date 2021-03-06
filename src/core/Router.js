import React, { useContext } from "react";
import jwt from "jsonwebtoken";
import {
  BrowserRouter as BRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Login from "../pages/Login/Login.js";
import Signup from "../pages/Signup/Signup.js";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import Deployments from "../pages/Dashboard/Deployments.js";
import MyDeployments from "../pages/Dashboard/MyDeployments.js";
import Users from "../pages/Dashboard/Users.js";
import User from "../pages/User/User.js";
import Nodes from "../pages/Dashboard/Nodes.js";
import Whitelist from "../pages/Dashboard/Whitelist.js";
import Node from "../pages/Node/Node.js";
import MyProfile from "../pages/Dashboard/MyProfile.js";
import AuthContext from "../configs/authContext.js";

const Router = () => {
  const auth = useContext(AuthContext);
  let token = null;
  if (auth.user) {
    token = JSON.parse(sessionStorage.getItem("user")).token;
    token = jwt.decode(token);
  }

  return (
    <BRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/login" exact={true}>
          {auth.user ? <Home /> : <Login />}
        </Route>
        <Route path="/signup" exact={true}>
          {auth.user ? <Home /> : <Signup />}
        </Route>
        {auth.user ? (
          token && token.role === "member" ? (
            <>
              <Route path="/dashboard" exact={true}>
                <Dashboard>{MyDeployments}</Dashboard>
              </Route>
              <Route path="/dashboard/my-deployments" exact={true}>
                <Dashboard>{MyDeployments}</Dashboard>
              </Route>
              <Route path="/dashboard/profile" exact={true}>
                <Dashboard>{MyProfile}</Dashboard>
              </Route>
            </>
          ) : (
            <>
              <Route path="/dashboard" exact={true}>
                <Dashboard>{Nodes}</Dashboard>
              </Route>
              <Route path="/dashboard/nodes" exact={true}>
                <Dashboard>{Nodes}</Dashboard>
              </Route>
              <Route path="/dashboard/node/:id">
                <Dashboard>{Node}</Dashboard>
              </Route>
              <Route path="/dashboard/deployments" exact={true}>
                <Dashboard>{Deployments}</Dashboard>
              </Route>
              <Route path="/dashboard/users" exact={true}>
                <Dashboard>{Users}</Dashboard>
              </Route>
              <Route path="/dashboard/user/:id">
                <Dashboard>{User}</Dashboard>
              </Route>
              <Route path="/dashboard/my-deployments" exact={true}>
                <Dashboard>{MyDeployments}</Dashboard>
              </Route>
              <Route path="/dashboard/whitelist" exact={true}>
                <Dashboard>{Whitelist}</Dashboard>
              </Route>
              <Route path="/dashboard/profile" exact={true}>
                <Dashboard>{MyProfile}</Dashboard>
              </Route>
            </>
          )
        ) : (
          //no permissions
          <Redirect to="/login" />
        )}
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </BRouter>
  );
};

export default Router;
