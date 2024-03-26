import React from "react";
import SearchButton from "./SearchButton";
import logo from "../../assets/image/logo.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="relative px-5 py-2 flex flex-wrap justify-between items-start pt-5 bg-white">
        <a className="order-2" href="index.html">
          <img className="w-36" src={logo} alt="" />
        </a>
        <SearchButton />
        {/* <div class="w-full">
          <div class="py-2 px-5 bg-white shadow-stone-50 shadow-md hidden lg:block">
            <div class="-mx-1"> */}

        {/* </div>
          </div>
        </div> */}
      </nav>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default Navbar;
