import React from "react";
import Header from "../../../Components/Header";
import Mainbanner from "../../../Components/Mainbanner/mainbanner";
import CategoryBanner from "../../../Components/CategoryBanner";
import Footer from "../../../Components/Footer";
import ProductBanner from "../../../Components/Productbanner";

const HomepageFlex = () => {
  return (
    <>
      <Header />
      <Mainbanner/>
      <CategoryBanner/>
      <ProductBanner/>
      <Footer/>
    </>
  );
};

export default HomepageFlex;
