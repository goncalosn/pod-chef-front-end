import React, { useEffect, useState } from "react";
import APIServices from "../../services/index.js";
import PodsChart from "./PodsChart.js";
import Breadcrumb from "../../components/Breadcrumb.js";
import Nodes from "../Dashboard/Nodes.js";

const Node = (props) => {
  //initialize state with undefined data
  const [data, setData] = useState({
    Name: "undefined",
    MaxPods: "undefined",
    AllocatablePods: "undefined",
    Conditions: [
      {
        Type: "undefined",
        Status: "undefined",
        LastTransitionTime: "undefined",
      },
    ],
    CreatedAt: "undefined",
  });

  //on mount
  useEffect(() => {
    APIServices.nodes
      .getNode(props.name)
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
      <Breadcrumb
        path={[
          {
            name: "Nodes",
            component: (
              <Nodes
                handler={props.handler}
                handleBannerState={props.handleBannerState}
                handleBannerColor={props.handleBannerColor}
                handleBannerText={props.handleBannerText}
              />
            ),
          },
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
    </div>
  );
};

export default Node;
