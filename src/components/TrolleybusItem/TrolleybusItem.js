import React, { useState } from "react";
import "./TrolleybusItem.css";
import trolleybus1 from "../../Icons/trolleybus1.webp";
import { NavLink } from "react-router-dom";

const TrolleybusItem = (trolleybus) => {
  const { item } = trolleybus;
  return (
    <div className="card">
      <img src={trolleybus1} alt="Product" className="card-image" />
      <h3 className="card-title">{item.model}</h3>
      <p className="card-price">${item.price}</p>
      <p>Max Speed: {item.max_speed}</p>
      <NavLink className="view-more-button" exact to={`/Catalog/${item.id}`}>
        View more
      </NavLink>
    </div>
  );
};

export default TrolleybusItem;
