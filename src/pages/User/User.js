import React, { useEffect, useState } from "react";
import services from "../../services";
import Breadcrumb from "../../components/Breadcrumb.js";
import Users from "../Dashboard/Users.js";
import Modal from "../../components/Modal.js";

const User = (props) => {
  //initialize state with undefined data
  const [data, setData] = useState({
    name: "undefined",
    role: "undefined",
    date: "undefined",
  });
  const [tableData, setTableData] = useState(null);

  const [modal, setModal] = useState(false);
  const [deployment, setDeployment] = useState(null);

  const TITLE = "Delete deployment";
  const TEXT =
    "Are you sure you want to delete this deployment" +
    "This action cannot be undone.";

  const DELETERESPONSE = "Deployment deleted sucessefully";

  //on mount
  useEffect(() => {
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
  }, []);

  const deleteRequest = () => {
    services.deployments
      .delete({ id: deployment })
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
      <div className="flex">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5">
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
                  {data.role}
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
      </div>

      <h1 className="title-font sm:text-2xl text-2xl mb-4 mt-3 text-gray-900">
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
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {deployment.uuid}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {deployment.image}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(deployment.date).toLocaleString("pt-PT")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <ViewBtn {...props} id={deployment.id} />
                          <DeleteBtn
                            onClick={() => {
                              setModal(true);
                              setDeployment(deployment.id);
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
        title={TITLE}
        text={TEXT}
      />
    </>
  );
};

export default User;

export const ViewBtn = (props) => {
  return (
    <button
      type="button"
      className="inline-flex items-center py-2 rounded-md text-indigo-600 hover:text-indigo-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
      onClick={() => {
        //TODO: open app on new tab
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
