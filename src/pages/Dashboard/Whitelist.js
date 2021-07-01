import React, { useState, useEffect } from "react";

import services from "../../services/index.js";
import Modal from "../../components/Modal.js";

const Whitelist = (props) => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [modalRequest, setModalRequest] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  const TITLE_DELETE = "Delete invite";
  const TEXT_DELETE = "Are you sure you want to delete this invite?";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //on mount
  useEffect(() => {
    getAll();
  }, []);

  //on delete
  useEffect(() => {
    if (user) {
      setModal(true);
      setModalTitle(TITLE_DELETE);
      setModalText(TEXT_DELETE);
      setModalRequest(() => deleteRequest);
    }
  }, [user]);

  const getAll = () => {
    services.whitelist
      .getAll()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  const inviteRequest = () => {
    services.whitelist
      .add({ email: email })
      .then((response) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(response);

        //get all users after invite
        getAll();
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };
  const deleteRequest = () => {
    services.whitelist
      .delete({ id: user })
      .then((response) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-green-600");
        props.handleBannerText(response);

        //get all users after delete
        getAll();
      })
      .catch((error) => {
        props.handleBannerState(true);
        props.handleBannerColor("bg-red-600");
        props.handleBannerText(error);
      });
  };

  return (
    <>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Whitelist
      </h1>
      <hr />

      <InvitationField
        onClick={() => inviteRequest}
        handler={() => handleEmailChange}
      />

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
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date of invitation
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data &&
                    data.map((invite) => (
                      <tr key={invite.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <div className="text-sm text-gray-500">
                                {invite.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(invite.date).toLocaleString("pt-PT")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <DeleteBtn
                            onClick={() => {
                              setUser(invite.id);
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

export default Whitelist;

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

export const InvitationField = ({ onClick, handler }) => {
  return (
    <div className="md:grid md:grid-cols-6 md:gap-6 mt-2">
      <div className="col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Insert the email here"
          onChange={handler()}
        />
      </div>
      <div className="col-span-4 md:mt-6 sm:mt-1">
        <button
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClick()}
        >
          Invite
        </button>
      </div>
    </div>
  );
};
