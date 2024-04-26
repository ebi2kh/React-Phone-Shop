import React from "react";
import banner from "../../assets/image/sectionImage/1.jpg";
function SimpleBanner1() {
  return (
    <div>
      <a href="search.html">
        <img className="rounded-2xl hidden md:block" src={banner} alt="" />
      </a>
      <a href="search.html" />
      <img
        className="rounded-2xl md:hidden"
        src="assets/image/sectionImage/1-mobile.jpg"
        alt=""
      />
    </div>
  );
}

export default SimpleBanner1;
