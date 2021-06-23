import React, { useContext } from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Login from "../pages/Login/Login.js";
import Signup from "../pages/Signup/Signup.js";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import VMs from "../pages/Dashboard/VMs.js";
import Nodes from "../pages/Dashboard/Nodes.js";
import Node from "../pages/Node/Node.js";
import Services from "../pages/Dashboard/Services.js";
import Service from "../pages/Service/Service.js";
import AuthContext from "../configs/authContext.js";

const Router = () => {
  const auth = useContext(AuthContext)
    return (
      <BRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/login" exact={true}>
            { auth.user ? <Home /> : <Login /> }
          </Route>
          <Route path="/signup" exact={true}>
            { auth.user ? <Home /> : <Signup /> }
          </Route>
          {auth.user ? (
            <>
              <Route path="/dashboard" exact={true}>
                <Dashboard>{VMs}</Dashboard>
              </Route>
              <Route path="/dashboard/vms" exact={true}>
                <Dashboard>{VMs}</Dashboard>
              </Route>
              <Route path="/dashboard/nodes" exact={true}>
                <Dashboard>{Nodes}</Dashboard>
              </Route>
              <Route path="/dashboard/node/:name">
                <Dashboard>{Node}</Dashboard>
              </Route>
              <Route path="/dashboard/services" exact={true}>
                <Dashboard>{Services}</Dashboard>
              </Route>
              <Route path="/dashboard/service/:name">
                <Dashboard>{Service}</Dashboard>
              </Route>
            </>
          ) : (
            <div>401 Unauthorized</div>
          )}
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </BRouter>
    );
}

export default Router;