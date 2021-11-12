import React from "react";
import "./ShopCard.css";

function ShopCard({ name, price, color, img }) {
  return (
    <div className={"ShopCard"}>
      <div className={"name"}>{name}</div>
      <div className={"color"}>{color}</div>
      <div className={"img-row"}>
        <img className={"img"} src={img} alt="Фото" />
      </div>
      <div className={"ShopCard-footer"}>
        <div className={"price"}> {price}</div>
        <btn className={"btn"}>Add to cart</btn>
      </div>
    </div>
  );
}

export default ShopCard;
