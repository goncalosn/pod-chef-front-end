import React from "react";

import PodsChart from "./PodsChart.js";
import Breadcrumb from "../../components/Breadcrumb.js";
import Nodes from "../Dashboard/Nodes.js";

const Node = (props) => {
  return (
    <div>
      <Breadcrumb
        path={[
          { name: "Nodes", component: <Nodes handler={props.handler} /> },
          { name: props.name },
        ]}
        handler={props.handler}
      />
      <div className="flex">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Node Information
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.Name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Allocatable Pods
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.AllocatablePods + "/" + data.MaxPods}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Created at
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date(data.CreatedAt).toLocaleString()}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Conditions
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {data.Conditions.map((condition, index) => (
                      <li
                        className="pl-3 pr-4 py-3 grid grid-cols-2 gap-2"
                        key={index}
                      >
                        <span>{condition.Type}:</span>
                        <span>
                          {condition.Status === "True" ? (
                            <span className="px-2 mx-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-white">
                              true
                            </span>
                          ) : (
                            <span className="px-2 mx-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-white">
                              false
                            </span>
                          )}
                        </span>
                        <span>Last transition time:</span>
                        <span>
                          {new Date(
                            condition.LastTransitionTime
                          ).toLocaleString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="pl-8 w-3/5">
          <PodsChart />
        </div>
      </div>

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8">
        Services
      </h1>
      <hr />

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8">
        Volumes
      </h1>
      <hr />
    </div>
  );
};

export default Node;

const data = {
  Name: "kind-worker",
  MaxPods: "110",
  AllocatablePods: "110",
  Conditions: [
    {
      Type: "MemoryPressure",
      Status: "False",
      LastTransitionTime: "2021-04-10T18:54:20Z",
    },
    {
      Type: "DiskPressure",
      Status: "False",
      LastTransitionTime: "2021-04-10T18:54:20Z",
    },
    {
      Type: "PIDPressure",
      Status: "False",
      LastTransitionTime: "2021-04-10T18:54:20Z",
    },
    {
      Type: "Ready",
      Status: "True",
      LastTransitionTime: "2021-04-11T20:21:20Z",
    },
  ],
  CreatedAt: "2021-04-10T18:54:20Z",
};
