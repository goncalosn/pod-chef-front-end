import React, { useEffect, useState } from "react";
import services from "../../services";
import Node from "../Node/Node.js";

const Nodes = (props) => {
  const [data, setData] = useState(null);

  //on mount
  useEffect(() => {
    services.nodes
      .getNodes()
      .then((response) => {
        setData(response);
        props.handleBannerState(false);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  }, []);

  return (
    <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Nodes
      </h1>
      <hr />
      <div className="flex flex-wrap text-center">
        {data === null ? (
          //add node card
          <div className="pt-4 px-2 md:w-1/6 sm:w-1/2 w-full h-full">
            <div className="px-3 py-16 mx-auto border-4 border-dashed border-gray-200 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-600 flex justify-center">
                No nodes found
              </h2>
            </div>
          </div>
        ) : (
          //create cards for each node
          data.map((node, index) => (
            <div
              className="pt-4 px-2 md:w-1/6 sm:w-1/2 w-full h-full"
              key={index}
            >
              <div className="border-2 border-gray-200 px-2 py-6 rounded-lg">
                <button
                  type="button"
                  className="inline-flex items-center py-2 rounded-md text-3xl font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    props.handler(
                      <Node
                        name={node.Name}
                        handler={props.handler}
                        handleBannerState={props.handleBannerState}
                        handleBannerColor={props.handleBannerColor}
                        handleBannerText={props.handleBannerText}
                      />,
                      "/node/" + node.Name
                    );
                  }}
                >
                  {node.Name}
                </button>
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
          ))
        )}
      </div>
    </div>
  );
};

export default Nodes;
