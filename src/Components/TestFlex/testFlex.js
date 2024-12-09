import React from "react";
import classes from "./testFlex.module.css";
import bgImage from "../Mainbanner/bgImage.png";

const TestFlex = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imagebox}>
          <img className={classes.bgimage} src={bgImage} alt="bgimage" />
        </div>
        <div className={classes.content_box}>
          <h2>This heading</h2>
          <h4> sub heading</h4>
          <p> bhghjgjhjhhhnbnbnbnbnbn</p>
        </div>
      </div>
    </div>
  );
};

export default TestFlex;
