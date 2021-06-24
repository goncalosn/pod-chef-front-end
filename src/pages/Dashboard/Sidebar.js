import React from "react";

import "./sidebar.css";

import Nodes from "./Nodes.js";
import Deployments from "./Deployments.js";
import MyDeployments from "./MyDeployments.js";
import Users from "./Users.js";
import Whitelist from "./Whitelist.js";

import {
  ServerIcon,
  CloudIcon,
  MinusIcon,
  UserGroupIcon,
  MailIcon,
} from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";

const Sidebar = (props) => {
  return (
    <div className="flex h-full mr-5">
      <div className="block w-14 h-full rounded-lg shadow-md">
        <div className="sidebar-item">
          <ServerIcon
            className="h-10 w-10 mx-auto mt-5 sidebar-item"
            data-tip
            data-for="cluster-tooltip"
            onClick={() => props.handler(<Nodes {...props} />, "/nodes")}
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
              props.handler(<Deployments {...props} />, "/deployments")
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
            onClick={() => props.handler(<Users {...props} />, "/users")}
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
              props.handler(<Whitelist {...props} />, "/whitelist")
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

        <div className="sidebar-item">
          {/* personal icons*/}

          <CloudIcon
            className="h-10 w-10 mx-auto mt-3"
            data-tip
            data-for="my-deployments-tooltip"
            onClick={() =>
              props.handler(<MyDeployments {...props} />, "/my-deployments")
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
