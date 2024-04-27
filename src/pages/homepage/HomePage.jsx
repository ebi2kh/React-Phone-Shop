import React from "react";
import SimpleSlider from "../../components/slides/SimpleSlider";
import SimpleBanner1 from "../../components/Static/SimpleBanner1";
import SimpleBanner2 from "../../components/Static/SimpleBanner2";
import OffSlider from "../../components/slides/OffSlider";
import ProductSlider from "../../components/slides/ProductSlider";
import BigSlider from "../../components/slides/BigSlider";
import BrandSlider from "../../components/slides/BrandSlider";
import BlogSlider from "../../components/slides/BlogSlider";

function HomePage() {
  return (
    <>
      <SimpleSlider />;
      <SimpleBanner1 />
      <OffSlider />
      <ProductSlider />
      <BigSlider />
      <SimpleBanner2 />
      <BrandSlider />
      <BlogSlider />
    </>
  );
}

export default HomePage;
