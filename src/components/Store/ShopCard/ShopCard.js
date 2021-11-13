import React from "react";
import "./ShopCard.scss";

function ShopCard({ name, price, color, img, view }) {
  return (
    <div className={`ShopCard ${view}`}>
      <div className={"name"}>{name}</div>
      <div className={"color"}>{color}</div>
      <div
        className={"img-row"}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={"ShopCard-footer"}>
        <div className={"price"}> {"$" + price}</div>
        <div className={"btn-card"}>Add to cart</div>
      </div>
    </div>
  );
}

export default ShopCard;
