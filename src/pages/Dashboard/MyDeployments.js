import React, { useContext, useState, useEffect } from "react";
import services from "../../services";
import AuthContext from "../../configs/authContext";
import Modal from "../../components/Modal.js";

const MyDeployments = (props) => {
  const auth = useContext(AuthContext);
  const [deploys, setDeploys] = useState([]);
  const [image, setImage] = useState("nginx");
  const [replicas, setReplicas] = useState(3);
  const [deployName, setDeployName] = useState("");
  const [modal, setModal] = useState(false);
  const [deployment, setDeployment] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [modalRequest, setModalRequest] = useState(null);
  const [modalBtnText, setModalBtnText] = useState(null);

  const TITLE_BTN_TEXT = "Delete";
  const TITLE_DELETE_DEPLOYMENT = "Delete deployment";
  const TEXT_DELETE_DEPLOYMENT =
    "Are you sure you want to delete this deployment? " +
    "This action cannot be undone.";

  const part1URL = process.env.REACT_APP_URL_PART1;
  const part2URL = process.env.REACT_APP_URL_PART2;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    services.deployments
      .create({ name: deployName, image, replicas })
      .then((res) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(
          <p>
            Application created!{" "}
            <a
              className="hover:text-green-900"
              href={part1URL + deployName + part2URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {part1URL + deployName + part2URL}
            </a>
          </p>
        );

        services.deployments
          .getMyDeployments()
          .then((res) => setDeploys(res ? res : []))
          .catch((err) => {
            props.handleBannerState(true);
            props.handleBannerColor("bg-red-600");
            props.handleBannerText(err);
          });
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

        services.deployments
          .getMyDeployments()
          .then((res) => setDeploys(res ? res : []))
          .catch((err) => {
            props.handleBannerState(true);
            props.handleBannerColor("bg-red-600");
            props.handleBannerText(err);
          });
      })
      .catch((e) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(e);
      });
  };

  useEffect(() => {
    if (!auth.user) return;

    services.deployments
      .getMyDeployments()
      .then((res) => {
        setDeploys(res ? res : []);
        props.handleBannerState(false);
      })
      .catch((e) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(e);
      });
  }, []);

  useEffect(() => {
    if (!deployment) return;

    setModal(true);
    setModalBtnText(TITLE_BTN_TEXT);
    setModalTitle(TITLE_DELETE_DEPLOYMENT);
    setModalText(TEXT_DELETE_DEPLOYMENT);
    setModalRequest(() => handleDelete);
  }, [deployment]);

  useEffect(() => {
    if (!modal) {
      setDeployment(null);
    }
  }, [modal]);

  return (
    <>
      <div>
        {/* user input, here it places the docker's image name */}
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          My Deployments
        </h1>
        <hr />
        <div className="md:grid md:grid-cols-3 mt-4">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={(evt) => handleSubmit(evt)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company_website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your application name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          {part1URL}
                        </span>
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300"
                          placeholder="cool-app-name"
                          onChange={(e) => setDeployName(e.target.value)}
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          {part2URL}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company_website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Docker image
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          hub.docker.com/
                        </span>
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="nginx"
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 bg-white sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company_website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Number of replicas
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
                          placeholder="3"
                          onChange={(e) =>
                            setReplicas(parseInt(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col overflow-x-hidden mt-4">
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
                    {deploys.map((dep) => {
                      return (
                        <tr key={dep.uuid}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                {dep.uuid}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-green-100 text-green-800">
                              {dep.image}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(dep.created_at).toLocaleString("pt-PT")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <ViewDeploymentBtn name={dep.uuid} />
                            <DeleteDeploymentBtn
                              onClick={() => {
                                setDeployment(dep.uuid);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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

export default MyDeployments;

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
