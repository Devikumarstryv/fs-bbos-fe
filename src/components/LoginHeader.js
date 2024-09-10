import React from "react";
import logo from "../../src/Assets/images/BBOS_Logo.svg";

function LoginHeader() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-14 w-auto" src={logo} alt="Your Company" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LoginHeader;
