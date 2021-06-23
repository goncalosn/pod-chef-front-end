import React from "react";

import "./sidebar.css";

import Nodes from "./Nodes.js";
import Deployments from "./Deployments.js";

import { ServerIcon, CloudIcon } from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";

const Sidebar = (props) => {
  return (
    <div className="flex h-full mr-5">
      <div className="block w-14 h-full rounded-lg shadow-md">
        <div className="sidebar-item">
          <div className="sidebar-item">
            <ServerIcon
              className="h-10 w-10 mx-auto mt-5 sidebar-item"
              data-tip
              data-for="cluster-tooltip"
              onClick={() => props.handler(<Nodes {...props} />, "/nodes")}
            />
          </div>
          <ReactTooltip
            id="cluster-tooltip"
            place="right"
            effect="solid"
            className="dark:bg-white font-bold dark:text-black"
          >
            Cluster
          </ReactTooltip>

          <CloudIcon
            className="h-10 w-10 mx-auto mt-5"
            data-tip
            data-for="deployments-tooltip"
            onClick={() =>
              props.handler(<Deployments {...props} />, "/deployments")
            }
          />
        </div>

        <ReactTooltip
          id="deployments-tooltip"
          place="right"
          effect="solid"
          className="dark:bg-white font-bold dark:text-black"
        >
          Deployments
        </ReactTooltip>
      </div>
    </div>
  );
};

export default Sidebar;
