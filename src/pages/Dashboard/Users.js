import React, { useState, useEffect } from "react";

import services from "../../services/index.js";
import User from "../User/User.js";
import Modal from "../../components/Modal.js";

const Users = (props) => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  const title = "Delete account";
  const text =
    "Are you sure you want to delete this account? All of" +
    "this user's deployments and data will be permanently" +
    "removed. This action cannot be undone.";

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

  const deleteRequest = () => {
    services.user
      .delete({ id: user })
      .then((response) => {
        props.handleBannerState(false);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  return (
    <>
      <div className="flex flex-col overflow-x-hidden ">
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
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
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
                            {user.Role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <ViewBtn {...props} user={user} />
                          <DeleteBtn
                            onClick={() => {
                              setModal(true);
                              setUser(user.id);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modal}
        setOpen={setModal}
        onAction={deleteRequest}
        title={title}
        text={text}
      />
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
            name={props.user.Name}
            handler={props.handler}
            handleBannerState={props.handleBannerState}
            handleBannerColor={props.handleBannerColor}
            handleBannerText={props.handleBannerText}
          />,
          "/user/" + props.user.email
        );
      }}
    >
      View
    </button>
  );
};

export const DeleteBtn = ({ onClick }) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center py-2 rounded-md text-indigo-600 hover:text-indigo-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClick}
      >
        Delete
      </button>
    </>
  );
};
