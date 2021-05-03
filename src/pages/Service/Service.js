import React, { useState, useEffect } from "react";

import APIServices from "../../services/index.js";
import ServiceChart from "./ServiceChart.js";
import Breadcrumb from "../../components/Breadcrumb.js";
import Services from "../Dashboard/Services.js";

const Service = (props) => {
  //initialize state with undefined data
  const [data, setData] = useState({
    Name: "undefined",
    Namespace: "undefined",
    Kind: "undefined",
    CreatedAt: "undefined",
    ClusterIP: "undefined",
    LoadBalancerIP: "undefined",
    Selectors: {
      app: "undefined",
    },
    Ports: [
      {
        protocol: "undefined",
        port: "undefined",
        targetPort: "undefined",
        nodePort: "undefined",
      },
    ],
  });

  //on mount
  useEffect(() => {
    APIServices.services
      .getService(props.name, props.namespace)
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
            name: "Services",
            component: (
              <Services
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
              Service Information
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
                <dt className="text-sm font-medium text-gray-500">Namespace</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.Namespace}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Kind</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.Kind}
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
                  Cluster IP
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.ClusterIP}
                </dd>
              </div>
              {data.LoadBalancerIP === "" ? (
                <div />
              ) : (
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Kind</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.Kind}
                  </dd>
                </div>
              )}

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Selectors</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {data.Selectors &&
                      Object.keys(data.Selectors).map((key, index) => (
                        <li
                          className="pl-3 pr-4 py-3 grid grid-cols-2 gap-2"
                          key={index}
                        >
                          <span>{key}:</span>
                          <span>{data.Selectors[key]}</span>
                        </li>
                      ))}
                  </ul>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Ports</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {data.Ports.map((port, index) => (
                      <li
                        className="pl-3 pr-4 py-3 grid grid-cols-2 gap-2"
                        key={index}
                      >
                        <span>Name:</span>
                        <span>{port.name}</span>
                        <span>Protocol:</span>
                        <span>{port.protocol}</span>
                        <span>Port:</span>
                        <span>{port.port}</span>
                        <span>Target port:</span>
                        <span>{port.targetPort}</span>
                        <span>Node port:</span>
                        <span>{port.nodePort}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="pl-8 w-3/5">
          <ServiceChart />
        </div>
      </div>
    </div>
  );
};

export default Service;
