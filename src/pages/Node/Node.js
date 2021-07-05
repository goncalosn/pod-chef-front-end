import React, { useEffect, useState } from "react";
import services from "../../services";
import PieChart from "./PieChart.js";
import Breadcrumb from "../../components/Breadcrumb.js";
import Nodes from "../Dashboard/Nodes.js";

const Node = (props) => {
  //initialize state with undefined data
  const [nodeData, setNodeData] = useState({
    Name: null,
    Allocable: [
      {
        Cpu: null,
        Memory: null,
        Storage: null,
        Pods: null,
      },
    ],
    Capacity: [
      {
        Cpu: null,
        Memory: null,
        Storage: null,
        Pods: null,
      },
    ],
    Conditions: [
      {
        Type: null,
        Status: null,
        LastTransitionTime: null,
      },
    ],
    CreatedAt: null,
  });

  //on mount
  useEffect(() => {
    services.nodes
      .getNode({ node: props.id })
      .then((response) => {
        setNodeData(response);
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
          { name: props.id },
        ]}
        handler={props.handler}
      />
      <div className="flex">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-5/12">
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
                  {nodeData.Name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Allocatable Pods
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {nodeData.Allocable.Pods + "/" + nodeData.Capacity.Pods}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Created at
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date(nodeData.CreatedAt).toLocaleString("pt-PT")}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Conditions
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {nodeData.Conditions[0].Type ? (
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      {nodeData.Conditions.map((condition, index) => (
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
                            ).toLocaleString("pt-PT")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="ml-4 w-7/12">
          <div className="flex flex-wrap">
            <div className="w-5/12 bg-white shadow sm:rounded-lg mx-2">
              <PieChart
                labels={["Allocable", "Capacity"]}
                label={"Cpu"}
                data={[nodeData.Allocable.Cpu, nodeData.Capacity.Cpu]}
              />
            </div>
            <div className="w-5/12 bg-white shadow sm:rounded-lg  mx-2">
              <PieChart
                labels={["Allocable", "Capacity"]}
                label={"Memory"}
                data={[nodeData.Allocable.Memory, nodeData.Capacity.Memory]}
              />
            </div>
            <div className="w-5/12 bg-white shadow sm:rounded-lg  mx-2 mt-4">
              <PieChart
                labels={["Allocable", "Capacity"]}
                label={"Storage in Ki"}
                data={[nodeData.Allocable.Storage, nodeData.Capacity.Storage]}
              />
            </div>
            <div className="w-5/12 bg-white shadow sm:rounded-lg  mx-2 mt-4">
              <PieChart
                labels={["Allocable", "Capacity"]}
                label={"Pods"}
                data={[nodeData.Allocable.Pods, nodeData.Capacity.Pods]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Node;
