import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../img/product1.webp";
import product2 from "../img/product2.webp";
import product3 from "../img/product3.webp";
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h2> Simple Slider </h2>
      <Slider {...settings}>
        <div>
          <img src={product1} alt="Image 1" />
        </div>
        <div>
          <img src={product2} alt="Image 2" />
        </div>
        <div>
          <img src={product1} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
