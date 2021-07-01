import React, { useState, useEffect } from "react";

import services from "../../services/index.js";
import User from "../User/User.js";

const Users = (props) => {
  const [data, setData] = useState(null);

  //on mount
  useEffect(() => {
    services.user
      .getAll()
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
    <>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Users
      </h1>
      <hr />
      <div className="flex flex-col overflow-x-hidden pt-2">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date of registration
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data &&
                    data.map((user) => (
                      <tr key={user.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <div className="text-sm font-medium text-gray-900">
                                {user.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.date).toLocaleString("pt-PT")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <ViewBtn {...props} id={user.id} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

export const ViewBtn = (props) => {
  return (
    <button
      type="button"
      className="inline-flex items-center py-2 rounded-md text-indigo-600 hover:text-indigo-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
      onClick={() => {
        props.handler(
          <User
            handler={props.handler}
            handleBannerState={props.handleBannerState}
            handleBannerColor={props.handleBannerColor}
            handleBannerText={props.handleBannerText}
          />,
          "/user/" + props.id
        );
      }}
    >
      View
    </button>
  );
};
