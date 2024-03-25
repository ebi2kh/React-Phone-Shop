import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gif from "../img/1.gif";
import x from "../img/2.webp";
import x2 from "../img/2s.webp";
import x3 from "../img/3s.webp";

function SlideMain() {
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
    <section>
      <div className="container-fluid banner mt-3 ">
        <div className="row mx-lg-4 mx-0 d-flex align-items-stretch flex-wrap ">
          <div className="col-lg-8 px-0">
            <Slider {...settings}>
              <div>
                <img src={x2} alt="Image 1" />
              </div>
              <div>
                <img src={x3} alt="Image 2" />
              </div>
              <div>
                <img src={x} alt="Image 3" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-4 sec2-left ">
            <a href="#">
              <img src={gif} className="rounded" alt="" />
            </a>
            <a href="#">
              <img src={x} className="rounded mt-lg-2" alt=" " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlideMain;
