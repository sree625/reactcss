import React from "react";
import BgImage from "./bgImage.png";
import classes from "./mainbanner.module.css";

const Mainbanner = () => {
  return (
    <div className={classes.main_banner}>
      <div className={classes.banner_image_container}>
        <img
          className={classes.banner_image}
          src={BgImage}
          alt="New Collection"
        />
      </div>
      <div className={classes.main_banner_content}>
        <p className={classes.main_banner_subtitle}>New Arrival</p>
        <h1 className={classes.main_banner_title}>
          Discover Our New Collection
        </h1>
        <p className={classes.main_banner_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className={classes.main_banner_button}>Buy Now</button>
      </div>
    </div>
  );
};

export default Mainbanner;
