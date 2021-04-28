import React from "react";

import Node from "../Node/Node.js";

const Nodes = (props) => {
  return (
    <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Nodes
      </h1>
      <hr />
      <div className="flex flex-wrap text-center">
        {nodes.map((node, index) => (
          <div
            className="pt-4 px-2 md:w-1/6 sm:w-1/2 w-full h-full"
            key={index}
          >
            <div className="border-2 border-gray-200 px-2 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-600">
                <span
                  onClick={() => {
                    props.handler(
                      <Node name={node.Name} handler={props.handler} />,
                      "/node/" + node.Name
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {node.Name}
                </span>
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
        ))}
      </div>
    </div>
  );
};

export default Nodes;

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
