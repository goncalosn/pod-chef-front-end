import React from "react";
import Navbar from "../../assets/Navbar.js";
import { ChipIcon, ServerIcon } from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="h-screen">
        <Navbar />
        <div className="flex w-full px-4 py-4" style={{ height: "90%" }}>
          <div className="flex h-full mr-5">
            <div className="block w-14 h-full rounded-lg shadow-md">
              <ChipIcon
                className="h-10 w-10 mx-auto mt-5"
                data-tip
                data-for="vm-tooltip"
              />
              <ServerIcon
                className="h-10 w-10 mx-auto mt-5"
                data-tip
                data-for="cluster-tooltip"
              />
              <ReactTooltip
                id="vm-tooltip"
                place="right"
                effect="solid"
                className="dark:bg-white font-bold dark:text-black"
              >
                Virtual Machine
              </ReactTooltip>
              <ReactTooltip
                id="cluster-tooltip"
                place="right"
                effect="solid"
                className="dark:bg-white font-bold dark:text-black"
              >
                Cluster
              </ReactTooltip>
            </div>
          </div>
          <div className="flex flex-wrap h-full w-full">
            <div className="h-full w-full rounded-lg shadow-md p-4 overflow-y-auto">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Nodes
              </h1>
              <hr />
              {/* CARDS ------------------------------------- START*/}
              <div className="flex flex-wrap text-center">
                {nodes.map(renderNodes)}
              </div>
              {/* CARDS ------------------------------------- END*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function renderNodes(node, index) {
  return (
    <div className="p-4 md:w-1/6 sm:w-1/2 w-full h-full" key={index}>
      <div className="border-2 border-gray-200 px-2 py-6 rounded-lg">
        <h2 className="title-font font-medium text-3xl text-gray-600">
          <a href={"/dashboard/node/" + node.Name}>{node.Name}</a>
        </h2>
        <p className="font-semibold">Created at:</p>
        <p className="leading-relaxed">
          {new Date(node.CreatedAt).toLocaleString()}
        </p>
        {node.Roles.map((role, index) => (
          <span
            className="px-2 mx-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            key={index}
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
}

const nodes = [
  {
    Name: "kind-control-plane",
    Roles: ["control-plane", "master"],
    CreatedAt: "2021-04-10T18:53:48Z",
  },
  {
    Name: "kind-worker",
    Roles: ["slave"],
    CreatedAt: "2021-04-10T18:54:20Z",
  },
  {
    Name: "kind-worker2",
    Roles: ["slave"],
    CreatedAt: "2021-04-10T18:54:19Z",
  },
];
