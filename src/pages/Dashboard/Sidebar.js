import React, { Component } from "react";
import jwt from "jsonwebtoken";

import "./sidebar.css";

import Nodes from "./Nodes.js";
import Deployments from "./Deployments.js";
import MyDeployments from "./MyDeployments.js";
import Users from "./Users.js";
import Whitelist from "./Whitelist.js";
import MyProfile from "./MyProfile.js";
import AuthContext from "../../configs/authContext";

import {
  ServerIcon,
  CloudIcon,
  MinusIcon,
  UserGroupIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";

export default class Sidebar extends Component {
  static contextType = AuthContext;
  render() {
    const auth = this.context;
    let token = null;
    if (auth.user) {
      token = JSON.parse(sessionStorage.getItem("user")).token;
      token = jwt.decode(token);
    }

    return (
      <div className="flex h-full mr-5">
        <div className="block w-14 h-full rounded-lg shadow-md">
          {token && token.role !== "admin" ? null : (
            <>
              <div className="sidebar-item">
                <ServerIcon
                  className="h-10 w-10 mx-auto mt-5 sidebar-item"
                  data-tip
                  data-for="cluster-tooltip"
                  onClick={() =>
                    this.props.handler(<Nodes {...this.props} />, "/nodes")
                  }
                />
                <ReactTooltip
                  id="cluster-tooltip"
                  place="right"
                  effect="solid"
                  className="dark:bg-white font-bold dark:text-black"
                >
                  Cluster
                </ReactTooltip>

                <CloudIcon
                  className="h-10 w-10 mx-auto mt-2"
                  data-tip
                  data-for="deployments-tooltip"
                  onClick={() =>
                    this.props.handler(
                      <Deployments {...this.props} />,
                      "/deployments"
                    )
                  }
                />
                <ReactTooltip
                  id="deployments-tooltip"
                  place="right"
                  effect="solid"
                  className="dark:bg-white font-bold dark:text-black"
                >
                  Deployments
                </ReactTooltip>

                <UserGroupIcon
                  className="h-10 w-10 mx-auto mt-2"
                  data-tip
                  data-for="users-tooltip"
                  onClick={() =>
                    this.props.handler(<Users {...this.props} />, "/users")
                  }
                />
                <ReactTooltip
                  id="users-tooltip"
                  place="right"
                  effect="solid"
                  className="dark:bg-white font-bold dark:text-black"
                >
                  Users
                </ReactTooltip>

                <MailIcon
                  className="h-10 w-10 mx-auto mt-2"
                  data-tip
                  data-for="whitelist-tooltip"
                  onClick={() =>
                    this.props.handler(
                      <Whitelist {...this.props} />,
                      "/whitelist"
                    )
                  }
                />
                <ReactTooltip
                  id="whitelist-tooltip"
                  place="right"
                  effect="solid"
                  className="dark:bg-white font-bold dark:text-black"
                >
                  Users Whitelist
                </ReactTooltip>
              </div>

              {/* separator ---------------- */}

              <MinusIcon className="h-10 w-10 mx-auto mt-3" />
            </>
          )}
          <div className="sidebar-item">
            {/* personal icons*/}

            <CloudIcon
              className="h-10 w-10 mx-auto mt-3"
              data-tip
              data-for="my-deployments-tooltip"
              onClick={() =>
                this.props.handler(
                  <MyDeployments {...this.props} />,
                  "/my-deployments"
                )
              }
            />
            <ReactTooltip
              id="my-deployments-tooltip"
              place="right"
              effect="solid"
              className="dark:bg-white font-bold dark:text-black"
            >
              My deployments
            </ReactTooltip>

            <UserIcon
              className="h-10 w-10 mx-auto mt-3"
              data-tip
              data-for="profile-tooltip"
              onClick={() =>
                this.props.handler(<MyProfile {...this.props} />, "/profile")
              }
            />
            <ReactTooltip
              id="profile-tooltip"
              place="right"
              effect="solid"
              className="dark:bg-white font-bold dark:text-black"
            >
              My profile
            </ReactTooltip>
          </div>
        </div>
      </div>
    );
  }
}
