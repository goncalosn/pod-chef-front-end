import React from "react";

import "./sidebar.css";

import Services from "./Services.js";
import Nodes from "./Nodes.js";

import {
  ChipIcon,
  ServerIcon,
  DatabaseIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";

const Sidebar = (props) => {
  return (
    <div className="flex h-full mr-5">
      <div className="block w-14 h-full rounded-lg shadow-md">
        <div className="sidebar-item">
          <ChipIcon
            className="h-10 w-10 mx-auto mt-5"
            data-tip
            data-for="vm-tooltip"
          />
        </div>
        <ReactTooltip
          id="vm-tooltip"
          place="right"
          effect="solid"
          className="dark:bg-white font-bold dark:text-black"
        >
          Virtual Machine
        </ReactTooltip>

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

        <div className="sidebar-item">
          <CubeIcon
            className="h-10 w-10 mx-auto mt-5 sidebar-item"
            data-tip
            data-for="services-tooltip"
            onClick={() => props.handler(<Services {...props} />, "/services")}
          />
        </div>
        <ReactTooltip
          id="services-tooltip"
          place="right"
          effect="solid"
          className="dark:bg-white font-bold dark:text-black"
        >
          Services
        </ReactTooltip>

        <div className="sidebar-item">
          <DatabaseIcon
            className="h-10 w-10 mx-auto mt-5 sidebar-item"
            data-tip
            data-for="volumes-tooltip"
          />
        </div>
        <ReactTooltip
          id="volumes-tooltip"
          place="right"
          effect="solid"
          className="dark:bg-white font-bold dark:text-black"
        >
          Volumes
        </ReactTooltip>
      </div>
    </div>
  );
};

export default Sidebar;
