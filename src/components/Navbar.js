import React, { Component, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import jwt from "jsonwebtoken";
import AuthContext from "../configs/authContext";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

export default class Navbar extends Component {
  static contextType = AuthContext;

  render() {
    const auth = this.context;
    let token = null;
    if (auth.user) {
      token = JSON.parse(sessionStorage.getItem("user")).token;
      token = jwt.decode(token);
    }
    return (
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            {/* NAVBAR ------------------------------------------------------------- START */}
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1 ml-4">
                <a href="/">
                  <img
                    className="md:h-11 md:w-auto h-10"
                    src="../../logo.png"
                    alt="podchef-logo"
                  />
                </a>
              </div>

              {/* UTILIY BUTTON ON NAVBAR MOBILE ------------------------------------------------------------- START */}
              <div className="mr-4 md:hidden">
                <Popover.Button className="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* UTILIY BUTTON ON NAVBAR MOBILE ------------------------------------------------------------- END */}

              {/* CENTER BUTTONS ------------------------------------------------------------- START */}
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>Kubernetes</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {kubernetes.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {kubernetesCallsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>Docker</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {docker.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {dockerCallsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="https://github.com/goncalosn/pod-chef-back-end/blob/main/README.md"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Docs
                </a>

                <a
                  href="/dashboard"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Dashboard
                </a>
              </Popover.Group>
              {/* CENTER BUTTONS ------------------------------------------------------------- END */}

              {/* RIGHT BUTTONS ------------------------------------------------------------- START */}
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {auth.user ? (
                  <>
                    <h1 className="title-font text-xl font-light text-gray-900">
                      {token.name}
                    </h1>
                    <button
                      className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mr-4"
                      onClick={() => auth.logout()}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <div>
                    <a
                      href="/login"
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mx-6"
                    >
                      Sign in
                    </a>
                    <a
                      href="/signup"
                      className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mr-4"
                    >
                      Sign up
                    </a>
                  </div>
                )}
              </div>

              {/* RIGHT BUTTONS ------------------------------------------------------------- END */}
            </div>
            {/* NAVBAR ------------------------------------------------------------- END */}

            {/* MOBILE POP UP ------------------------------------------------------------- START*/}
            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="../../logo.png"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {mobileMenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    {auth.user ? (
                      <div>
                        <span
                          className="text-indigo-600 hover:text-indigo-500"
                          onClick={() => auth.logout()}
                        >
                          Sign out
                        </span>
                      </div>
                    ) : (
                      <div>
                        <a
                          href="/signup"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Sign up
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?{" "}
                          <a
                            href="/login"
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            Sign in
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
            {/* MOBILE POP UP ------------------------------------------------------------- END*/}
          </>
        )}
      </Popover>
    );
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mobileMenu = [
  {
    name: "Kubernetes",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "Docker",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/",
    icon: CursorClickIcon,
  },
  {
    name: "Docs",
    description: "Your customers' data will be safe and secure.",
    href: "https://github.com/goncalosn/pod-chef-back-end/blob/main/README.md",
    icon: ShieldCheckIcon,
  },
  {
    name: "Dashboard",
    description: "Connect with third-party tools that you're already using.",
    href: "/dashboard",
    icon: ViewGridIcon,
  },
];

const kubernetes = [
  {
    name: "Deployments",
    description:
      "Deployments ease the work necessary to maintain a application.",
    href: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment",
    icon: SupportIcon,
  },
  {
    name: "Services",
    description: "Services expose running applications to the network.",
    href: "https://kubernetes.io/docs/concepts/services-networking/service",
    icon: BookmarkAltIcon,
  },
  {
    name: "Ingresses",
    description: "Ingresses provide load balancing between services.",
    href: "https://kubernetes.io/docs/concepts/services-networking/ingress",
    icon: CalendarIcon,
  },
  {
    name: "Namespaces",
    description: "Namespaces provide a way to organize kubernetes objects.",
    href: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    icon: ShieldCheckIcon,
  },
];

const kubernetesCallsToAction = [
  {
    name: "Getting started",
    href: "https://kubernetes.io/docs/setup/",
    icon: PlayIcon,
  },
  {
    name: "Learn kubernetes",
    href: "https://kubernetes.io/docs/tutorials/",
    icon: BookmarkAltIcon,
  },
];

const docker = [
  {
    name: "Containers",
    description: "What is a container.",
    href: "https://www.docker.com/resources/what-container",
    icon: SupportIcon,
  },
  {
    name: "Integration with Kubernetes",
    description: "How Docker integrates with Kubernetes",
    href: "https://www.docker.com/products/kubernetes",
    icon: BookmarkAltIcon,
  },
  {
    name: "Community",
    description: "Explore Docker with multiple other developers.",
    href: "https://www.docker.com/docker-community",
    icon: CalendarIcon,
  },
  {
    name: "Docker hub",
    description: "The official docker image repository.",
    href: "https://hub.docker.com/",
    icon: ShieldCheckIcon,
  },
];
const dockerCallsToAction = [
  {
    name: "Try docker",
    href: "https://labs.play-with-docker.com/",
    icon: PlayIcon,
  },
  {
    name: "Learn docker",
    href: "https://docs.docker.com/",
    icon: BookmarkAltIcon,
  },
];
