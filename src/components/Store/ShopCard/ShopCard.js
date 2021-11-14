import React from "react";
import PropTypes from "prop-types";
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
ShopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  view: PropTypes.string,
};
ShopCard.defaultProps = {
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  view: "module",
};
export default ShopCard;
