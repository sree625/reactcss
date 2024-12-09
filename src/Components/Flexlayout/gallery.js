import React from "react";
import classes from "./gallery.module.css";
import galleryImage from "./pexels-sevenstormphotography-381739.png";

const Gallery = () => {
  return (
    <div className={classes.container}>
      <h2>Gallery</h2>
      <ul className={classes.gallery_list}>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
        <li>
          <img src={galleryImage} alt={"gallerItem"} />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
