import React from "react";
import classes from "./testHeader.module.css";
import logo from "./logopng.png";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
// import { IoMenu } from "react-icons/io5";

const TestHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerlogo}>
          <img src={logo} alt="Logo" />
          <span> Furniro</span>
        </div>
        <nav className={classes.header_nav}>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className={classes.icon_wrapper}>
          <FaRegUser className={classes.icon} />
          <IoSearch className={classes.icon} />
          <FaRegHeart className={classes.icon} />
          <FiShoppingCart className={classes.icon} />
        </div>
        {/* <div className={classes.menu}>
          <IoMenu />
        </div> */}
      </header>
    </>
  );
};

export default TestHeader;
