import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/image/heroSlider/4.jpg";
import product2 from "../../assets/image/heroSlider/1.jpg";
// import product3 from "../assets/image/heroSlider/3.gif";

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
          {/* <div className="col-lg-4 sec2-left ">
            <a href="#">
              <img src={gif} className="rounded" alt="" />
            </a>
            <a href="#">
              <img src={x} className="rounded mt-lg-2" alt=" " />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default SlideMain;
