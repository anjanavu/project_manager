import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ReactComponent as MenuIcon } from "./assets/icons/MenuIcon.svg";
import { ReactComponent as BellIcon } from "./assets/icons/BellIcon.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/SearchIcon.svg";
import { Link, useLocation } from "react-router-dom";

const navigation = [{ name: "Tickets", to: "Ticket", current: true }];

const Navbar = () => {
  const location = useLocation();
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-7xl px-2 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                          location.pathname === `/${item.to}`
                            ? "border-purple-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div class="flex items-center lg:hidden">
                  <button
                    type="button"
                    className="mr-4 block rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">search</span>
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <Disclosure.Button className=" inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-1 focus:ring-1  focus:ring-purple-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>

                    {open ? (
                      <MenuIcon className="block h-6 w-6" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <Link className="mr-4 block rounded-full p-1 text-gray-400 hover:text-purple-500">
                    <span className="sr-only">search</span>
                    <SearchIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    to={"/Ticket/ClientNotifications"}
                    className="mr-4 block rounded-full p-1 text-gray-400 hover:text-purple-500 "
                  >
                    <span className="sr-only">View Notification</span>
                    <BellIcon className="h-6 w-6" />
                  </Link>
                  <Menu as="div" className="relative flex-shrink-0">
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>

                    <Transition
                      as="div"
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={"/Ticket/ClientProfile"}
                              className={
                                "block px-4 py-2 text-sm text-gray-700" +
                                (active ? " bg-gray-100" : "")
                              }
                            >
                              Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={"/"}
                              className={
                                "block px-4 py-2 text-sm text-gray-700" +
                                (active ? " bg-gray-100" : "")
                              }
                            >
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    "block w-full text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 py-2 pl-3 pr-4 text-left text-base font-medium" +
                    (item.current
                      ? " border-l-4 border-l-purple-500 bg-purple-50 text-puurple-700  "
                      : "")
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="mb-3 flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full border object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Anjana V U
                  </div>
                  <div className="text-sm font-medium text-gray-500 mr-10">
                    anjanavu2000@gmail.com
                  </div>
                </div>

                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" />
              </div>

              <div className="space-y-1">
                <Disclosure.Button className="w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                  Profile
                </Disclosure.Button>

                <Disclosure.Button className="w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                  Logout
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
