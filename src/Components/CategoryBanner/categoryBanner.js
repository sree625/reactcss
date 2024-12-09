import React from "react";
import Bedroom from "./bedroom.png";
import Living from "./living.png";
import Dining from "./dining.png";
import classes from "./categoryBanner.module.css";

const CategoryBanner = () => {
  return (
    <section className={classes.category_wrapper}>
      <div className={classes.container}>
        <div className={classes.title_wrap}>
          <h1 className={classes.category_title}>Browse The Range</h1>
          <p className={classes.categoryText}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className={classes.category_content}>
          {categories.map((item) => (
            <div key={item.id} className={classes.categoryitem}>
              <a  href={"/about"}className={classes.image_wrap}>
                <img
                  className={classes.categoryImage}
                  src={item.img}
                  alt="category"
                />{" "}
              </a>
              <h3 className={classes.categorysubtitle}> {item.title}</h3>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;

const categories = [
  { img: Bedroom, id: 1, title: "Dining" },
  { img: Living, id: 2, title: "Living" },
  { img: Dining, id: 3, title: "Bedroom" },
];
