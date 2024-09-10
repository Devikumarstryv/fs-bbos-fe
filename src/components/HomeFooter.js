import React from "react";
import digi from "../../src/Assets/images/digicert.png";
import logo from "../../src/Assets/images/BBOS_Logo.svg";

function HomeFooter() {
  return (
    <footer className="bg-white border-t bg-[url('../src/Assets/images/liquid-cheese-4.svg')] bg-no-repeat bg-cover">
      <div className="mt-4 lg:mx-10 mx-3 grid grid-cols-3 pt-10 pb-4">
        <div className="lg:col-span-2 col-span-full ">
          <img className="h-20 w-auto" src={logo} alt="Your Company" />
          <div className="flex mb-6">
            <img
              className="h-5 mr-5 ml-20 w-auto mt-4"
              src={digi}
              alt="Your Company"
            />
            <svg
              class="h-4 mt-4 mr-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <svg
              class="h-4 mt-4 mr-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
            <svg
              class="h-4 mt-4 mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
            <svg
              class="h-4 mt-4 mr-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </div>
        </div>
        <div className="col-span-full lg:col-auto">
          <ul className="flex lg:columns-2 flex-wrap items-center mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Home
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Contact Us
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Terms of Use
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Privacy Policy
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Advertise
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Community Standards
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Feedback
              </a>{" "}
            </li>
            <li className="w-1/2 pb-2">
              {" "}
              <a href="#" className="text-primary hover:text-secondary lg:px-5 px-2">
                Membership Agreement
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-span-full text-center border-t pt-3">
          <span className="text-sm text-gray-500 px-5 dark:text-gray-400">
            © 2024 Blue Book Services | 630 668-3500{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
