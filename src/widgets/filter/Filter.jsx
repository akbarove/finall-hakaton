import React, { useState } from "react";
import { links } from "../filter/image-links";
import "./style.css";

const Filter = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectedFilter && "selected-box"}`}
        >
          <img src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Filter;
