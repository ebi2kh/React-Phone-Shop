import React from "react";
import image1 from "../../assets/image/fourImage/1.jpg";
import image2 from "../../assets/image/fourImage/2.jpg";
import image3 from "../../assets/image/fourImage/3.jpg";
import image4 from "../../assets/image/fourImage/4.jpg";
function SimpleBanner2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <a href="search.html">
        <img className="rounded-xl" src={image1} alt="" />
      </a>
      <a href="search.html">
        <img className="rounded-xl" src={image2} alt="" />
      </a>
      <a href="search.html">
        <img className="rounded-xl" src={image3} alt="" />
      </a>
      <a href="search.html">
        <img className="rounded-xl" src={image4} alt="" />
      </a>
    </div>
  );
}

export default SimpleBanner2;
