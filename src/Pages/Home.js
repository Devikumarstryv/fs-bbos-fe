import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import digi from "../../src/Assets/images/digicert.png";
import banner from "../../src/Assets/images/BBOS_Banner.jpg";

import Slider from "../../src/Pages/Slider";

import HomeFooter from "../components/HomeFooter";
import HomeNavbar from "../components/HomeNavbar";

function Home() {
  return (
    <>
      {/* Navbar */}
      <HomeNavbar />

      {/* Slider */}
      <Slider />

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:mx-14 mx-3 gap-5 mt-8">
        <div class="bg-[url('../src/Assets/images/liquid-cheese-1.svg')] bg-no-repeat bg-cover max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 className="flex bg-black bg-opacity-20 px-4 py-4 rounded-t-md text-white items-center">
            <svg
              class="h-5 mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
              <line x1="8" y1="9" x2="16" y2="9" />{" "}
              <line x1="8" y1="13" x2="14" y2="13" />
            </svg>
            My Message Center{" "}
          </h3>
          <p class="px-4 py-4 text-white">
            In the last 7 days, 121 Changes have been reported. View All
            Messages
          </p>
        </div>

        <div class="bg-[url('../src/Assets/images/liquid-cheese-2.svg')] bg-no-repeat bg-cover max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 className="flex px-4 py-3 bg-black bg-opacity-20 rounded-t-md text-white items-center">
            <svg
              class="h-5 mr-2"
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
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
              <line x1="8" y1="9" x2="16" y2="9" />{" "}
              <line x1="8" y1="13" x2="14" y2="13" />
            </svg>
            News/Articles{" "}
          </h3>
          <ul className="list-disc pl-9 py-4 pr-4 text-white">
            <li>Brazil begins to export mangoes to the U.S.</li>
            <li>Sunkist partners with National Breast Cancer Fo...</li>
            <li>View All Articles.</li>
          </ul>
        </div>

        <div class="bg-[url('../src/Assets/images/liquid-cheese-3.svg')] bg-no-repeat bg-cover max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 className="flex px-4 py-3 bg-black bg-opacity-20 rounded-t-md text-white items-center">
            <svg
              class="h-5 mr-2"
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
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
              <line x1="8" y1="9" x2="16" y2="9" />{" "}
              <line x1="8" y1="13" x2="14" y2="13" />
            </svg>
            My Account{" "}
          </h3>
          <ul className="list-disc pl-9 py-4 pr-4 text-white">
            <li>Who's Viewed My Profile?</li>
            <li>View My Company Profile</li>
            <li>Manage My Account</li>
            <li>Request my Business Valuation ** New</li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mx-14 mx-3 gap-5 mt-8">
        <div className="border rounded-md">
          <table className="lg:w-full table-fixed rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="bg-slate-100 border-b">
                <th
                  colSpan={2}
                  className="lg:px-6 px-3 py-4 break-normal font-bold text-gray-900 w-1/8"
                >
                  My Recently Viewed Companies
                </th>
                <th className="lg:px-6 break-normal px-3 py-4 w-1/4 font-semibold text-xs cursor-pointer text-right text-gray-900">
                  Change Widgets{" "}
                </th>
              </tr>
              <tr className="border-b">
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  BB #
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Company Name
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">300314</td>
                <td className="lg:px-6 px-3 py-3">126 Clarke Market Corp.</td>
                <td className="lg:px-6 px-3 py-3">Brentwood, NY</td>
              </tr>
              <tr className="bg-white border-b hover:bg-tablerow">
                <td className="lg:px-6 px-3 py-3">361505</td>
                <td className="lg:px-6 px-3 py-3">Bugarin Fruits, Inc.</td>
                <td className="lg:px-6 px-3 py-3">San Diego, CA</td>
              </tr>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">145664</td>
                <td className="lg:px-6 px-3 py-3">Lun Fat Produce, Inc.</td>
                <td className="lg:px-6 px-3 py-3">Boston, MA </td>
              </tr>
              <tr className="bg-white border-b hover:bg-tablerow">
                <td className="lg:px-6 px-3 py-3">404528</td>
                <td className="lg:px-6 px-3 py-3">
                  Lone Cypress Logistics, Inc.
                </td>
                <td className="lg:px-6 px-3 py-3">Salinas, CA </td>
              </tr>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">386244</td>
                <td className="lg:px-6 px-3 py-3">
                  {" "}
                  M&M Mr Fresh S.P.R. de R.L. de C.V.
                </td>
                <td className="lg:px-6 px-3 py-3">Puebla, Pue, Mexico </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border rounded-md">
          <table className="lg:w-full table-fixed rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="bg-slate-100 border-b">
                <th
                  colSpan={2}
                  className="lg:px-6 px-3 py-4 font-bold text-gray-900"
                >
                  Most Recently Published New Listings{" "}
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-xs cursor-pointer text-right text-gray-900">
                  Change Widgets{" "}
                </th>
              </tr>
              <tr className="border-b">
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  BB #
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Company Name
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">406189</td>
                <td className="lg:px-6 px-3 py-3">
                  Avo Valley S. De R.L. De C.V.
                </td>
                <td className="lg:px-6 px-3 py-3">Guadalajara, Jal, Mexico </td>
              </tr>
              <tr className="bg-white border-b hover:bg-tablerow">
                <td className="lg:px-6 px-3 py-3">397799</td>
                <td className="lg:px-6 px-3 py-3"> Espinosa Mina, Lilia</td>
                <td className="lg:px-6 px-3 py-3">Cuitlahuac, Ver, Mexico </td>
              </tr>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">406881</td>
                <td className="lg:px-6 px-3 py-3"> Nature's Delight</td>
                <td className="lg:px-6 px-3 py-3">Oakland, CA</td>
              </tr>
              <tr className="bg-white border-b hover:bg-tablerow">
                <td className="lg:px-6 px-3 py-3">300310</td>
                <td className="lg:px-6 px-3 py-3">Custom Ag-Pak, LLC.</td>
                <td className="lg:px-6 px-3 py-3">Watsonville, CA</td>
              </tr>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">379363</td>
                <td className="lg:px-6 px-3 py-3">Guerrero Farm, Inc.</td>
                <td className="lg:px-6 px-3 py-3">Brandywine, MD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mx-14 mx-3 gap-5 mt-8 mb-10">
        <div className="border rounded-md">
          <table className="lg:w-full table-fixed rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="bg-slate-100 border-b">
                <th className="lg:px-6 px-3 py-4 font-bold text-gray-900">
                  Industry Metrics Snapshot{" "}
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-xs cursor-pointer text-right text-gray-900">
                  Change Widgets{" "}
                </th>
              </tr>
              <tr className="border-b">
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Industry Metric{" "}
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  In Past 12 Months{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">Meritorious Claims</td>
                <td className="lg:px-6 px-3 py-3">170</td>
              </tr>
              <tr className="bg-white border-b hover:bg-tablerow">
                <td className="lg:px-6 px-3 py-3">Bankruptcy</td>
                <td className="lg:px-6 px-3 py-3">31</td>
              </tr>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">Downgrade</td>
                <td className="lg:px-6 px-3 py-3">284</td>
              </tr>
              <tr className="bg-white border-b hover:bg-tablerow">
                <td className="lg:px-6 px-3 py-3">Upgrade</td>
                <td className="lg:px-6 px-3 py-3">567</td>
              </tr>
              <tr className="bg-tablerow border-b">
                <td className="lg:px-6 px-3 py-3">Newly Listed</td>
                <td className="lg:px-6 px-3 py-3">425</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border rounded-md">
          <table className="lg:w-full table-fixed rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="bg-slate-100 border-b">
                <th
                  colSpan={3}
                  className="lg:px-6 px-3 py-4 font-bold text-gray-900 break-normal	w-8/12"
                >
                  Alert Companies With Recent Key Changes{" "}
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-xs w-4/12 cursor-pointer text-right text-gray-900">
                  Change Widgets{" "}
                </th>
              </tr>
              <tr className="border-b">
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  BB #
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Company Name
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Location
                </th>
                <th className="lg:px-6 px-3 py-4 font-semibold text-gray-900">
                  Date Published{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-tablerow border-b">
                <td colSpan={4} className="lg:px-6 px-3 py-3">
                  No Alert companies with recent key changes found.{" "}
                </td>
              </tr>
              <tr className="border-b">
                <td colSpan={4} className="lg:px-6 px-3 py-3">
                  <button
                    type="submit"
                    className="rounded-md w-full bg-white text-black border px-3 py-2 text-sm font-semibold hover:text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <HomeFooter />
      {/* Footer   */}
    </>
  );
}
export default Home;
