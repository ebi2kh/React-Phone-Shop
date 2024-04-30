import React from "react";
import SearchButton from "./SearchButton";
import logo from "../../assets/image/logo.jpg";
import { Link } from "react-router-dom";
import UserShortInfo from "./UserShortInfo";
import BasketShortInfo from "./BasketShortInfo";

function Navbar() {
  return (
    <div>
      <nav className="relative px-5 py-2 flex flex-wrap justify-between items-start pt-5 bg-white">
        <Link className="order-2" to={"/"}>
          <img className="w-14" src={logo} alt="" />
        </Link>
        <div className="order-3 w-full mt-3 lg:mt-0 lg:w-5/12 lg:mr-[10%]">
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
