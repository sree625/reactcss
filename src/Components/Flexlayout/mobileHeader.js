import React from "react";
import classes from "./mobilHeader.module.css";

const MobileHeader = () => {
  return (
    <header>
      <div className={classes.header_main_section}>
        <div className={classes.logo}>D-files</div>
        <div className={classes.toggle}>
          <div className={classes.toggle_logo}>
            <i className={classes.ibar}></i>
          </div>
          <header>
            <ul className={classes.nav_links}>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/contact">Home</a>
              </li>
              <li>
                <a href="/contact">About</a>
              </li>
              <li>
                <a href="/contact">Privacy policy</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
