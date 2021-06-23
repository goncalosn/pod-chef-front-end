import React from "react";

import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

const Banner = (props) => {
  return (
    <div>
      {props.state === true ? (
        <div className={`${props.color} absolute z-10 w-screen`}>
          <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">{props.text}</span>
                  <span className="hidden md:inline">{props.text}</span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => {
                    props.setState(false);
                  }}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Banner;
