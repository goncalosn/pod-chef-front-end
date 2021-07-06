import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";
import services from "../../services";

const Deployments = (props) => {
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [modalRequest, setModalRequest] = useState(null);
  const [deployment, setDeployment] = useState(null);
  const [modalBtnText, setModalBtnText] = useState(null);

  const TITLE_BTN_TEXT = "Delete";
  const TITLE_DELETE_DEPLOYMENT = "Delete deployment";
  const TEXT_DELETE_DEPLOYMENT =
    "Are you sure you want to delete this deployment? " +
    "This action cannot be undone.";

  useEffect(() => {
    getAllDeployments();
  }, []);

  const getAllDeployments = () => {
    services.deployments
      .getAll()
      .then((res) => {
        setData(res ? res : []);
        props.handleBannerState(false);
      })
      .catch((e) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(e);
      });
  };

  const handleDelete = () => {
    services.deployments
      .delete({ id: deployment })
      .then((res) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(res);

        getAllDeployments();
      })
      .catch((e) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(e);
      });
  };

  useEffect(() => {
    if (!deployment) return;

    setModal(true);
    setModalTitle(TITLE_DELETE_DEPLOYMENT);
    setModalText(TEXT_DELETE_DEPLOYMENT);
    setModalBtnText(TITLE_BTN_TEXT);
    setModalRequest(() => handleDelete);
  }, [deployment]);

  useEffect(() => {
    if (!modal) {
      setDeployment(null);
    }
  }, [modal]);

  return (
    <>
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
                  {data &&
                    data.map((deployment) => (
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
        btnText={modalBtnText}
        onAction={modalRequest}
        title={modalTitle}
        text={modalText}
      />
    </>
  );
};

export default Deployments;

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
