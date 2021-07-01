import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import services from "../../services";

const MyProfile = (props) => {
  const [data, setData] = useState({
    name: "",
    id: "",
    email: "",
    date: "",
    role: "",
    password: "",
  });

  const handleNameChange = (e) => {
    setData({ name: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setData({ password: e.target.value });
  };

  //on mount
  useEffect(() => {
    //get user info
    let token = JSON.parse(sessionStorage.getItem("user")).token;
    token = jwt.decode(token);

    setData({
      name: token.name,
      id: token.id,
      date: token.date,
      role: token.role,
      email: token.email,
      password: "",
    });
  }, []);

  const updateName = () => {
    services.user
      .updateOwnName({ name: data.name })
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

  const updatePassword = () => {
    services.user
      .updateOwnPassword({ password: data.password })
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
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        My profile
      </h1>
      <hr />
      <div className="md:grid md:grid-cols-6 md:gap-6 mt-2">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Insert the name here"
            value={data.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-span-4 md:mt-6 sm:mt-1">
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              updateName();
            }}
          >
            Save
          </button>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Insert the password here"
            value={data.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="col-span-4 md:mt-6 sm:mt-1">
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              updatePassword();
            }}
          >
            Save
          </button>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              disabled
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={data.email}
            />
          </div>
        </div>
        <div className="col-span-4 md:mt-6 sm:mt-1"></div>

        <div className="mt-5 md:mt-0 md:col-span-1">
          <div className="col-span-1">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <input
              id="role"
              disabled
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={data.role}
            />
          </div>
        </div>
        <div className="col-span-5 md:mt-6 sm:mt-1"></div>

        <div className="mt-5 md:mt-0 md:col-span-1">
          <div className="col-span-1">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date of registration
            </label>
            <input
              id="date"
              disabled
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={new Date(data.date).toLocaleString("pt-PT")}
            />
          </div>
        </div>
        <div className="col-span-5 md:mt-6 sm:mt-1"></div>
      </div>
    </>
  );
};

export default MyProfile;
