import React from "react";
import banner from "../../assets/image/heroSlider/1.jpg";
import banner2 from "../../assets/image/heroSlider/1-mobile.jpg";
import { Link } from "react-router-dom";
function SimpleBanner1() {
  return (
    <div>
      <Link to={"/category"}>
        <img className="rounded-2xl hidden md:block" src={banner} alt="" />
      </Link>
      <Link to={"/category"}>
        <img className="rounded-2xl md:hidden" src={banner2} alt="" />
      </Link>
    </div>
  );
}

export default SimpleBanner1;
