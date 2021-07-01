import React, { useContext, useState, useEffect } from "react";
import services from "../../services";
import AuthContext from "../../configs/authContext";

const MyDeployments = (props) => {
  const auth = useContext(AuthContext);
  const [deploys, setDeploys] = useState([]);
  const [image, setImage] = useState("nginx");
  const [replicas, setReplicas] = useState(3);
  const [deployName, setDeployName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    services.deployments
      .create({ name: deployName, image, replicas })
      .then((res) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText("Application " + res + " created.");

        services.deployments
          .getDeploymentsByUser()
          .then((res) => setDeploys(res ? res : []))
          .catch((err) => console.error(err));
      })
      .catch((e) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText("Error: " + e);
      });
  };

  const handleDelete = (e, appuuid) => {
    e.preventDefault();
    console.log(appuuid)

    services.deployments
      .delete({name: appuuid})
      .then((res) => {
        if(res) {
          props.handleBannerState(true);
          props.handleBannerColor("bg-yellow-600");
          props.handleBannerText("Application " + appuuid + " deleted!");
        } else {
          props.handleBannerState(true);
          props.handleBannerColor("bg-red-600");
          props.handleBannerText("An error occurred while attempting to delete the application: " + res);
        }

        services.deployments
          .getDeploymentsByUser()
          .then((res) => setDeploys(res ? res : []))
          .catch((err) => console.error(err));
      })
      .catch((e) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText("Error: " + e);
      });
  }

  useEffect(() => {
    if (!auth.user) return;

    services.deployments
      .getDeploymentsByUser()
      .then((res) => setDeploys(res ? res : []))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {/* user input, here it places the docker's image name */}
      <div className="md:grid md:grid-cols-3">
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
                        https://
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
                        .podchef.cf
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
                        onChange={(e) => setReplicas(parseInt(e.target.value))}
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

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {deploys.map((dep) => {
                    return (
                      <tr key={dep._id}>
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
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={(e) => handleDelete(e, dep.uuid)}
                          >
                            Delete
                          </button>
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
  );
};

export default MyDeployments;
