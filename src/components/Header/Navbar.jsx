import React from "react";
import SearchButton from "./SearchButton";
import logo from "../../assets/image/logo.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserShortInfo from "./UserShortInfo";
import BasketShortInfo from "./BasketShortInfo";

function Navbar() {
  return (
    <div>
      <nav className="relative px-5 py-2 flex flex-wrap justify-between items-start pt-5 bg-white">
        <a className="order-2" href="index.html">
          <img className="w-36" src={logo} alt="" />
        </a>
        <div class="order-3 w-full mt-3 lg:mt-0 lg:w-5/12 lg:mr-[10%]">
          <SearchButton />
        </div>
        <div className="order-4 hidden lg:flex">
          <UserShortInfo />
          <BasketShortInfo />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
