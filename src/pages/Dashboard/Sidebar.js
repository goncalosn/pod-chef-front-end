import React from "react";

import {
  ChipIcon,
  ServerIcon,
  DatabaseIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";
import Services from "./Services.js";
import Nodes from "./Nodes.js";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="flex h-full mr-5">
        <div className="block w-14 h-full rounded-lg shadow-md">
          <ChipIcon
            className="h-10 w-10 mx-auto mt-5"
            data-tip
            data-for="vm-tooltip"
          />
          <ReactTooltip
            id="vm-tooltip"
            place="right"
            effect="solid"
            className="dark:bg-white font-bold dark:text-black"
          >
            Virtual Machine
          </ReactTooltip>

          <ServerIcon
            className="h-10 w-10 mx-auto mt-5"
            data-tip
            data-for="cluster-tooltip"
            onClick={() => this.props.handle(Nodes)}
          />
          <ReactTooltip
            id="cluster-tooltip"
            place="right"
            effect="solid"
            className="dark:bg-white font-bold dark:text-black"
          >
            Cluster
          </ReactTooltip>

          <CubeIcon
            className="h-10 w-10 mx-auto mt-5"
            data-tip
            data-for="services-tooltip"
            onClick={() => this.props.handle(Services)}
          />
          <ReactTooltip
            id="services-tooltip"
            place="right"
            effect="solid"
            className="dark:bg-white font-bold dark:text-black"
          >
            Services
          </ReactTooltip>

          <DatabaseIcon
            className="h-10 w-10 mx-auto mt-5"
            data-tip
            data-for="volumes-tooltip"
          />
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
  }
}
