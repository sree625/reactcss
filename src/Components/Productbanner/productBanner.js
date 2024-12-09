import React from "react";
import Product from "./product";
import classes from "./productBanner.module.css";
const ProductBanner = () => {
  return (
    <div className={classes.product_wrap}>
      <h2>Our Products</h2>
      <Product />
      <button className={classes.showmore}>Show More</button>
    </div>
  );
};

export default ProductBanner;
