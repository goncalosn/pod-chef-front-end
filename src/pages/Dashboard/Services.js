import React, { useState, useEffect } from "react";
import APIServices from "../../services/index.js";
import Service from "../Service/Service.js";
import Select from "../../components/Select.js";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Services = (props) => {
  const [data, setData] = useState(null);
  const [namespace, setNamespace] = useState(null);
  const [namespaces, setNamespaces] = useState([]);

  //on mount
  useEffect(() => {
    //get all namespaces
    APIServices.namespaces
      .getNamespaces()
      .then((namespaceResponse) => {
        setNamespaces(namespaceResponse);
        setNamespace(namespaceResponse[0]);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  }, []);

  //one namespace update
  useEffect(() => {
    if (namespace !== null) {
      //get all services by that namespace
      APIServices.services
        .getServices(namespace)
        .then((response) => {
          setData(response);
          props.handleBannerState(false);
        })
        .catch((error) => {
          props.handleBannerState(true);
          props.handleBannerColor("bg-red-600");
          props.handleBannerText(error);
        });
    }
  }, [namespace]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
          Services
        </h1>
      </div>
      <hr />
      <div className="flex flex-wrap text-center">
        {data === null ? (
          // add service card
          <div className="pt-4 px-2 md:w-1/6 sm:w-1/2 w-full h-full">
            <div className="px-3 py-16 mx-auto border-4 border-dashed border-gray-200 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-600 flex justify-center">
                <a
                  href="dashboard/create/servuce"
                  className="flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusCircleIcon className="h-10 w-10 mr-2" />
                  Create service
                </a>
              </h2>
            </div>
          </div>
        ) : (
          // create cards for each service
          data.map((service, index) => (
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
                      <Service
                        name={service.Name}
                        namespace={namespace}
                        handler={props.handler}
                        handleBannerState={props.handleBannerState}
                        handleBannerColor={props.handleBannerColor}
                        handleBannerText={props.handleBannerText}
                      />,
                      "/service/" + service.Name
                    );
                  }}
                >
                  {service.Name}
                </button>
                <p className="font-semibold">Created at:</p>
                <p className="leading-relaxed">
                  {new Date(service.CreatedAt).toLocaleString()}
                </p>
                <span className="px-2 mx-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {service.Kind}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
