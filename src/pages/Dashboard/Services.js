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
              <h2 className="title-font font-medium text-3xl text-gray-600">
                <span
                  onClick={() => {
                    props.handler(
                      <Service name={service.Name} handler={props.handler} />,
                      "/service/" + service.Name
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {service.Name}
                </span>
              </h2>
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
