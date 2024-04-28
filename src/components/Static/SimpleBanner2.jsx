import React from "react";
import image1 from "../../assets/image/heroSlider/banner4.jpg";
import image2 from "../../assets/image/heroSlider/banner5.jpg";
import { Link } from "react-router-dom";

function SimpleBanner2() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-5">
      <Link to={"category"}>
        <img className="rounded-xl" src={image1} alt="" />
      </Link>
      <Link to={"category"}>
        <img className="rounded-xl" src={image2} alt="" />
      </Link>
      {/* <a href="search.html">
        <img className="rounded-xl" src={image3} alt="" />
      </a>
      <a href="search.html">
        <img className="rounded-xl" src={image4} alt="" />
      </a> */}
    </div>
  );
}

export default SimpleBanner2;
