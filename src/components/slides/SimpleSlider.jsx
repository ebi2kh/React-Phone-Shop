import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/image/heroSlider/4.jpg";
import product2 from "../../assets/image/heroSlider/1.jpg";

// import product3 from "../assets/image/heroSlider/3.gif";
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
    <div style={{ marginTop: "30px" }} className="box-border">
      <Slider {...settings}>
        <div>
          <img
            className="rounded-md md:rounded-3xl md:px-2 "
            src={product1}
            alt="Image 1"
          />
        </div>
        <div>
          <img
            className="rounded-md md:rounded-3xl md:px-2 "
            src={product2}
            alt="Image 2"
          />
        </div>
        <div>
          <img
            className="rounded-md md:rounded-3xl md:px-2 "
            src={product1}
            alt="Image 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
