import React from "react";
import digi from "../../src/Assets/images/digicert.png";

function LoginFooter() {
  return (
    <footer className="bg-white border-t">
      <div className="mt-4 lg:mx-10 mx-4 mb-4 grid grid-cols-1">
        <div className="col-span-full justify-between flex">
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className="w-1/2 text-left lg:w-auto">
              {" "}
              <a href="#" className="text-primary hover:text-secondary px-5">
                Home
              </a>{" "}
            </li>
            <li className="w-1/2 text-left lg:w-auto">
              {" "}
              <a href="#" className="text-primary hover:text-secondary px-5">
                About Us
              </a>{" "}
            </li>
            <li className="w-1/2 text-left lg:w-auto">
              {" "}
              <a href="#" className="text-primary hover:text-secondary px-5">
                Produce
              </a>{" "}
            </li>
            <li className="w-1/2 text-left lg:w-auto">
              {" "}
              <a href="#" className="text-primary hover:text-secondary px-5">
                Lumber
              </a>{" "}
            </li>
            <li className="w-full text-left lg:w-auto">
              {" "}
              <a href="#" className="text-primary hover:text-secondary px-5">
                Community Standards
              </a>{" "}
            </li>
            <li className="w-1/2 text-left lg:w-auto">
              {" "}
              <a href="#" className="text-primary hover:text-secondary px-5">
                Contact Us
              </a>{" "}
            </li>
          </ul>
          <img className="h-12 w-auto" src={digi} alt="Your Company" />
        </div>
        <div className="col-span-full text-left">
          <span className="text-sm text-gray-500 px-5 dark:text-gray-400">
            © 2024 Blue Book Services | 630 668-3500{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default LoginFooter;
