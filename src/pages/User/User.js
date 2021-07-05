import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import services from "../../services";
import Breadcrumb from "../../components/Breadcrumb.js";
import Users from "../Dashboard/Users.js";
import Modal from "../../components/Modal.js";

const User = (props) => {
  let history = useHistory();

  //initialize state with undefined data
  const [data, setData] = useState({
    name: null,
    role: null,
    date: null,
  });

  const [tableData, setTableData] = useState(null);
  const [modal, setModal] = useState(false);
  const [deployment, setDeployment] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [modalRequest, setModalRequest] = useState(null);

  const TITLE_DELETE_DEPLOYMENT = "Delete deployment";
  const TEXT_DELETE_DEPLOYMENT =
    "Are you sure you want to delete this deployment? " +
    "This action cannot be undone.";

  const TITLE_DELETE_USER = "Delete account";
  const TEXT_DELETE_USER =
    "Are you sure you want to delete this account? All of " +
    "this user's deployments and data will be permanently " +
    "removed. This action cannot be undone.";

  const TITLE_RESET_PASSWORD = "Reset user's password";
  const TEXT_RESET_PASSWORD =
    "Are you sure you want to reset this user's password? " +
    "This user will be notified through an email.";

  //on mount
  useEffect(() => {
    getUserInfo();
    getDeployments();
  }, []);

  const getUserInfo = () => {
    //get user info
    services.user
      .getUser({ id: props.id })
      .then((response) => {
        setData(response);
        props.handleBannerState(false);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  const getDeployments = () => {
    //get tabel data
    services.deployments
      .getDeploymentsByUser({ user: props.id })
      .then((response) => {
        setTableData(response);
        props.handleBannerState(false);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  const deleteDeploymentRequest = () => {
    services.deployments
      .delete({ id: deployment })
      .then((response) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(response);
        getDeployments();
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  const resetPasswordRequest = () => {
    services.user
      .resetUserPassword({ id: props.id })
      .then((response) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(response);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  const deleteUserRequest = () => {
    services.user
      .delete({ id: props.id })
      .then((response) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(response);
        history.push("/dashboard/users");
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  const updateRoleRequest = () => {
    services.user
      .updateUserRole({ id: props.id, role: data.role })
      .then((response) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(response);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  useEffect(() => {
    if (!deployment) return;

    setModal(true);
    setModalTitle(TITLE_DELETE_DEPLOYMENT);
    setModalText(TEXT_DELETE_DEPLOYMENT);
    setModalRequest(() => deleteDeploymentRequest);
  }, [deployment]);

  useEffect(() => {
    if (!modal) {
      setDeployment(null);
    }
  }, [modal]);

  return (
    <>
      <Breadcrumb
        path={[
          {
            name: "Users",
            component: (
              <Users
                handler={props.handler}
                handleBannerState={props.handleBannerState}
                handleBannerColor={props.handleBannerColor}
                handleBannerText={props.handleBannerText}
              />
            ),
          },
          { name: data.name },
        ]}
        handler={props.handler}
      />
      <div className="grid md:grid-cols-8 md:row-span-3 md:gap-2">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg col-span-3 row-span-3">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Information
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Role</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <SelectRole
                    selected={data.role}
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        role: e.target.value,
                      }))
                    }
                    onClick={updateRoleRequest}
                  />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Date of registration
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date(data.date).toLocaleString("pt-PT")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg col-span-3 row-span-1 md:ml-5 mt-5 md:mt-0">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Actions
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ResetPasswordBtn
                    onClick={() => {
                      setModal(true);
                      setModalTitle(TITLE_RESET_PASSWORD);
                      setModalText(TEXT_RESET_PASSWORD);
                      setModalRequest(() => resetPasswordRequest);
                    }}
                  />
                  <DeleteUserBtn
                    onClick={() => {
                      setModal(true);
                      setModalTitle(TITLE_DELETE_USER);
                      setModalText(TEXT_DELETE_USER);
                      setModalRequest(() => deleteUserRequest);
                    }}
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <h1 className="title-font font-medium sm:text-2xl text-2xl mb-4 mt-3 text-gray-900">
        Deployments
      </h1>
      <hr />
      {/* deployments table --------------------------------------------- */}
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
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created at
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData &&
                    tableData.map((deployment) => (
                      <tr key={deployment.uuid}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {deployment.uuid}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {deployment.image}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(deployment.created_at).toLocaleString(
                            "pt-PT"
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <ViewDeploymentBtn name={deployment.uuid} />
                          <DeleteDeploymentBtn
                            onClick={() => {
                              setDeployment(deployment.uuid);
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
        onAction={modalRequest}
        title={modalTitle}
        text={modalText}
      />
    </>
  );
};

export default User;

export const ViewDeploymentBtn = ({ name }) => {
  const part1URL = process.env.REACT_APP_URL_PART1;
  const part2URL = process.env.REACT_APP_URL_PART2;

  return (
    <a
      className="inline-flex items-center py-2 rounded-md text-indigo-600 hover:text-indigo-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
      href={part1URL + name + part2URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </a>
  );
};

export const DeleteDeploymentBtn = ({ onClick }) => {
  return (
    <button
      className="inline-flex items-center py-2 rounded-md text-indigo-600 hover:text-indigo-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export const ResetPasswordBtn = ({ onClick }) => {
  return (
    <button
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:mr-2"
      onClick={onClick}
    >
      Reset password
    </button>
  );
};

export const DeleteUserBtn = ({ onClick }) => {
  return (
    <>
      <button
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClick}
      >
        Delete User
      </button>
    </>
  );
};

export const SelectRole = ({ selected, onChange, onClick }) => {
  return (
    <div className="md:grid md:grid-cols-6 md:gap-6">
      <div className="col-span-4">
        <select
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selected ? selected : ""}
          onChange={(e) => {
            onChange(e);
          }}
        >
          <option>admin</option>
          <option>member</option>
        </select>
      </div>
      <div className="col-span-2 mt-1">
        <button
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};
