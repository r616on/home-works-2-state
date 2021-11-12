import React from "react";
import ShopCard from "../ShopCard/ShopCard";

function CardsView({ cards }) {
  return (
    <div className={"CardsView"}>
      {cards.map((item, index) => {
        return (
          <ShopCard
            key={index}
            name={item.name}
            price={item.price}
            color={item.color}
            img={item.img}
          />
        );
      })}
    </div>
  );
}

export default CardsView;
