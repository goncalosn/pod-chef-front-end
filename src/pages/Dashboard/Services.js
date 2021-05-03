import React from "react";

import Service from "../Service/Service.js";
import Select from "../../components/Select.js";

const Services = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
          Services
        </h1>
        <div className="flex items-center justify-end">
          <Select />
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap text-center">
        {data.map((service, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Services;

const data = [
  {
    Name: "kubernetes",
    Kind: "ClusterIP",
    CreatedAt: "2021-04-10T18:53:49Z",
  },
  {
    Name: "my-service3",
    Kind: "NodePort",
    CreatedAt: "2021-04-29T21:16:00Z",
  },
  {
    Name: "my-service4",
    Kind: "LoadBalancer",
    CreatedAt: "2021-04-29T21:17:31Z",
  },
];
