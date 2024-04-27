import React from "react";
import SimpleSlider from "../../components/slides/SimpleSlider";
import SimpleBanner1 from "../../components/Static/SimpleBanner1";
import OffSlider from "../../components/slides/OffSlider";
import ProductSlider from "../../components/slides/ProductSlider";
import BigSlider from "../../components/slides/BigSlider";

function HomePage() {
  return (
    <>
      <SimpleSlider />;
      <SimpleBanner1 />
      <OffSlider />
      <ProductSlider />
      <BigSlider />
    </>
  );
}

export default HomePage;
