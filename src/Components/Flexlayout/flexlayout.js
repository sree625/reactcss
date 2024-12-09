import React from "react";
import classes from "./flexlayout.module.css";
import logo from "../Header/logopng.png";
import hero from "../Mainbanner/bgImage.png";
const Flexlayout = () => {
  return (
    <div>
      <header>
        <div className={classes.container}>
          <nav>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
            </div>
            <ul className={classes.navlist}>
              <li>
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Service</a>
                <a href="/home">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={classes.hero_section}>
        <img src={hero} alt={"hero"} />
        <div className={classes.hero_content}>
          <h1> wlllllkljkhajhjdhfjh</h1>
          <p>
            loremm Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={classes.gallery_content}>
        <div className={classes.container}>
          <h2> Gallery</h2>
          <ul className={classes.gallery_list}>
            <li>
              <img src={logo} alt={"gallery"} />
            </li>
            <li>
              <img src={logo} alt={"gallery"} />
            </li>
            <li>
              <img src={logo} alt={"gallery"} />
            </li>
            <li>
              <img src={logo} alt={"gallery"} />
            </li>
            <li>
              <img src={logo} alt={"gallery"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flexlayout;
