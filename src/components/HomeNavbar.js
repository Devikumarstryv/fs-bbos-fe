import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function HomeNavbar() {
  const [toggle, setToggle] = useState(false);
  const [AdvancedToggle, setAdvancedToggle] = useState(false);
  const [ToolToggle, setToolToggle] = useState(false);
  const [LearnToggle, setLearnToggle] = useState(false);
  const advancedDropdownRef = useRef(null);
  const toolDropdownRef = useRef(null);
  const learnDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClickAdvanced = () => {
    setAdvancedToggle(!AdvancedToggle);
  };

  const handleClickTool = () => {
    setToolToggle(!ToolToggle);
  };

  const handleClickLearn = () => {
    setLearnToggle(!LearnToggle);
  };

  const handleClickOutside = (event) => {
    if (
      advancedDropdownRef.current &&
      !advancedDropdownRef.current.contains(event.target)
    ) {
      setAdvancedToggle(false);
    }
    if (
      menuDropdownRef.current &&
      !menuDropdownRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
    if (
      toolDropdownRef.current &&
      !toolDropdownRef.current.contains(event.target)
    ) {
      setToolToggle(false);
    }
    if (
      learnDropdownRef.current &&
      !learnDropdownRef.current.contains(event.target)
    ) {
      setLearnToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-primary fixed w-full top-0 left-0">
      <div className="mx-auto lg:max-w-7xl  px-2 sm:px-6 lg:px-7">
        <div className="relative flex h-16 items-center lg:justify-between">
          <div className="flex items-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/home"
                  className="rounded-md lg:px-3 px-1 py-2 text-sm font-medium text-white flex items-center"
                  aria-current="page"
                >
                  <svg
                    className="h-6 lg:h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">Home</span>
                </Link>
                <div ref={advancedDropdownRef} className="relative m-0">
                  <button
                    type="button"
                    onClick={handleClickAdvanced}
                    className="flex items-center rounded-md lg:px-3 px-1 py-2 text-sm font-medium text-white"
                    aria-expanded="false"
                  >
                    <svg
                      className="h-6 lg:h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                    <span className="hidden sm:inline-block">
                      Advanced Search
                    </span>
                  </button>

                  {AdvancedToggle === true ? (
                    <div className="absolute -left-8 top-full z-10 mt-3 w-56 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="py-3">
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Advanced Company Search
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              People Search
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Company Update Search
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Claim Search
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pt-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Recent Views
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Run Last Company Search
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pt-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Saved Searches
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    !AdvancedToggle
                  )}
                </div>

                <div ref={toolDropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={handleClickTool}
                    className="flex items-center rounded-md lg:px-3 px-1 py-2 text-sm font-medium text-white"
                    aria-expanded="false"
                  >
                    <svg
                      className="h-6 lg:h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                    <span className="hidden sm:inline-block">Tools</span>
                  </button>

                  {ToolToggle === true ? (
                    <div className="absolute -left-8 top-full z-10 mt-3 lg:w-96 w-72 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="py-3 h-[32rem] overflow-auto">
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Business Valuation
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Confidentially request a fair market valuation of
                              your firm's enterprise value.
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Notes
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Save important details about companies and share
                              it with coworkers
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Watchdog Groups & Alerts
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Create your own custom lists of companies which
                              you can then use for a variety of purposes
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Trading Assistance / Collection Services
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Blue Book Services collection and claim activity
                              involving your company
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Online Business Reports
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Blue Book Online Business Reports that you have
                              purchased
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Submit Trade Experience Survey
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Confidentially share feedback about trade partners
                              to keep Blue Book Ratings accurate
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a
                              href="#"
                              className="block font-semibold text-gray-900"
                            >
                              Additional Tools
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              Mobile apps, Industry information, etc
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    !ToolToggle
                  )}
                </div>

                <div ref={learnDropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={handleClickLearn}
                    className="flex items-center rounded-md lg:px-3 px-1 py-2 text-sm font-medium text-white"
                    aria-expanded="false"
                  >
                    <svg
                      className="h-6 lg:h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                    <span className="hidden sm:inline-block">Learning</span>
                  </button>

                  {LearnToggle === true ? (
                    <div className="absolute -left-8 top-full z-10 mt-3 w-60 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="py-3">
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Learning Center Search
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Produce Blueprints Magazine
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Know Your Commodity
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Reference Documents
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Membership Guide
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              New Hire Academy
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pt-4 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Blueprints Flipbook
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              News/Articles
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                        <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                          <div className="flex-auto">
                            <a href="#" className="block text-gray-700 text-sm">
                              Rating Key Numerals
                              <span className="absolute inset-0"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    !LearnToggle
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 w-1/4 lg:w-1/2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex w-full h-16 items-center justify-between lg:px-2">
              <label for="email-address" className="sr-only">
                Search by Company Name or BBID
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Search by Company Name or BBID"
              />
            </div>

            <div className="relative ml-3">
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  ref={menuDropdownRef}
                  className="relative flex text-sm focus:outline-none"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <span className="rounded-full	bg-gray-700 px-3 text-xs py-2 text-white font-semibold">
                    {currentUser.name.charAt(0)}
                  </span>
                  <span className="hidden sm:inline-block rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <span className="">{currentUser.name}</span>
                  </span>
                </button>
              </div>
              {toggle === true ? (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-6 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    My Company Profile
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Who's Viewed My Profile?
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Message Center
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-2 pb-4 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Account Settings
                  </a>
                  <hr></hr>
                  <a
                    href="#"
                    className="block px-6 py-2 pt-4 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Cambiar a Espanol
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-2 pb-4 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Help and Support
                  </a>
                  <hr></hr>
                  <Link
                    to="/"
                    className="block px-6 py-2 pt-4 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    {" "}
                    Log Out{" "}
                  </Link>
                </div>
              ) : (
                !toggle
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-white"
            aria-current="page"
          >
          <svg className="h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> 
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={handleClickAdvanced}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white"
              aria-expanded="false"
            >
              Advances Search
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {AdvancedToggle === true ? (
              <div className="absolute -left-8 top-full z-10 mt-3 w-56 overflow-hidden left-2 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="py-3">
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Advanced Company Search
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        People Search
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Company Update Search
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Claim Search
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pt-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Recent Views
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Run Last Company Search
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pt-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Saved Searches
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              !AdvancedToggle
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={handleClickTool}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white"
              aria-expanded="false"
            >
              Tools
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {ToolToggle === true ? (
              <div className="absolute -left-8 top-full z-10 left-2 mt-3 w-80 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="py-3">
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Business Valuation
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Confidentially request a fair market valuation of your
                        firm's enterprise value.
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Notes
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Save important details about companies and share it with
                        coworkers
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Watchdog Groups & Alerts
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Create your own custom lists of companies which you can
                        then use for a variety of purposes
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Trading Assistance / Collection Services
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Blue Book Services collection and claim activity
                        involving your company
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Online Business Reports
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Blue Book Online Business Reports that you have
                        purchased
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Submit Trade Experience Survey
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Confidentially share feedback about trade partners to
                        keep Blue Book Ratings accurate
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Additional Tools
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">
                        Mobile apps, Industry information, etc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              !ToolToggle
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={handleClickLearn}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white"
              aria-expanded="false"
            >
              Learning
            </button>

            {LearnToggle === true ? (
              <div className="absolute -left-8 top-full z-10 mt-3 left-2 w-60 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="py-3">
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Learning Center Search
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Produce Blueprints Magazine
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Know Your Commodity
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Reference Documents
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Membership Guide
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pb-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        New Hire Academy
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 pt-4 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Blueprints Flipbook
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        News/Articles
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg px-6 py-2 text-sm leading-6">
                    <div className="flex-auto">
                      <a href="#" className="block text-gray-700 text-sm">
                        Rating Key Numerals
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              !LearnToggle
            )}
          </div>
        </div>
      </div> */}
    </nav>
  );
}

export default HomeNavbar;
