import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Switch from "./Switch";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mobileMenu = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Popover className="relative bg-white">
          {({ open }) => (
            <>
              {/* NAVBAR ------------------------------------------------------------- START */}
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1 ml-4">
                  <a href="/">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
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
                                {mobileMenu.map((item) => (
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
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
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
                          <span>VSphere</span>
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
                                {resources.map((item) => (
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
                              <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                <div>
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                    Recent Posts
                                  </h3>
                                  <ul className="mt-4 space-y-4">
                                    {recentPosts.map((post) => (
                                      <li
                                        key={post.id}
                                        className="text-base truncate"
                                      >
                                        <a
                                          href={post.href}
                                          className="font-medium text-gray-900 hover:text-gray-700"
                                        >
                                          {post.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    {" "}
                                    View all posts{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Docs
                  </a>
                </Popover.Group>
                {/* CENTER BUTTONS ------------------------------------------------------------- END */}

                {/* RIGHT BUTTONS ------------------------------------------------------------- START */}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Switch />
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
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Pricing
                        </a>

                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Docs
                        </a>
                        {resources.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
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
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
              {/* MOBILE POP UP ------------------------------------------------------------- END*/}
            </>
          )}
        </Popover>

        {/* main ------------------------------------------------------------- START*/}

        <div className="container py-10 mx-auto flex flex-wrap">
          <div className="mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:w-3/5 md:w-1/2 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Pod chef</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  online dashboard
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/goncalosn/pod-chef-front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 md:gap-10 gap-3 lg:w-2/5 md:w-1/2 mx-auto">
            <div className="transform scale-110 -rotate-6 translate-x-10 translate-y-10">
              <img
                className="md:w-28 w-20 md:h-28 h-20 flex-none rounded-3xl shadow-md"
                src="https://dummyimage.com/256x256"
                alt="1"
              />
            </div>
            <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
              <img
                className="md:w-36 w-24 md:h-36 h-24 flex-none rounded-3xl shadow-md"
                src="https://dummyimage.com/256x256"
                alt="2"
              />
            </div>
            <div className="transform scale-150 translate-y-11">
              <img
                className="md:w-40 w-16 md:h-24 h-14 flex-none rounded-3xl shadow-md"
                src="https://dummyimage.com/512x256"
                alt="3"
              />
            </div>
            <div className="transform translate-y-24 translate-x-10">
              <img
                className="md:w-36 w-16 md:h-36 h-16 flex-none rounded-3xl shadow-md"
                src="https://dummyimage.com/256x256"
                alt="4"
              />
            </div>
          </div>
        </div>
        {/* main ------------------------------------------------------------- END*/}

        {/* STEPS ------------------------------------------------------------- START*/}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Vice migas literally kitsch +1 pok pok. Truffaut hot
                      chicken slow-carb health goth, vape typewriter.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      Coloring book nar whal glossier master cleanse umami.
                      Salvia +1 master cleanse blog taiyaki.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 4
                    </h2>
                    <p className="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">
                      Pitchfork ugh tattooed scenester echo park gastropub
                      whatever cold-pressed retro.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="https://dummyimage.com/1200x500"
                alt="step"
              />
            </div>
          </div>
        </section>

        {/* STEPS ------------------------------------------------------------- END*/}

        {/* FOOTER  ------------------------------------------------------------- START*/}

        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Tailblocks</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Air plant banjo lyft occupy retro adaptogen indego
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2020 Tailblocks —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @knyttneve
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>

        {/* FOOTER  ------------------------------------------------------------- END*/}
      </div>
    );
  }
}
