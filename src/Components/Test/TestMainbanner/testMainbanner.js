import React from "react";
import mainimage from "../../Mainbanner/bgImage.png";
import classes from "./testMainbanner.module.css";

const Testbanner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <img src={mainimage} alt="mainbanner" />
      </div>
      <div className={classes.banner_text}>
        <h2>limited time offer</h2>
        <h1>sale</h1>
        <button className={classes.btn}>shop now</button>
      </div>
    </div>
  );
};

export default Testbanner;
