import React from "react";
import ShopCard from "../ShopCard/ShopCard";
import "./CardsView.css";

function CardsView({ cards, view }) {
  return (
    <div className={view === "module" ? "CardsView_module" : "CardsView_list"}>
      {cards.map((item, index) => {
        return (
          <ShopCard
            key={index}
            name={item.name}
            price={item.price}
            color={item.color}
            img={item.img}
            view={view}
          />
        );
      })}
    </div>
  );
}

export default CardsView;
