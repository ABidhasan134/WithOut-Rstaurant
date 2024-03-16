import React from "react";

import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <h1 className="text-2xl font-semibold">WithOut</h1>
        </div>
        <div className="navbar-center">
          <a className="font-semibold p-4 hover:bg-green-300 rounded-md">
            Home
          </a>
          <a className="font-semibold p-4 hover:bg-green-300 rounded-md">
            Recipis
          </a>
          <a className="font-semibold p-4 hover:bg-green-300 rounded-md">
            About
          </a>
          <a className="font-semibold p-4 hover:bg-green-300 rounded-md">
            Search
          </a>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button className="btn btn-ghost btn-circle text-4xl hover:bg-green-300">
            <FaRegUserCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
