import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import ShopCard from "../ShopCard/ShopCard";
import "./CardsView.css";

function CardsView({ cards, view }) {
  let cardsIndex = [];
  if (cards.length > 0) {
    cardsIndex = cards.map((item) => ({
      id: shortid.generate(),
      value: item,
    }));
  } else {
    cardsIndex = null;
  }
  return (
    cardsIndex && (
      <div
        className={view === "module" ? "CardsView_module" : "CardsView_list"}
      >
        {cardsIndex.map((item) => {
          return (
            <ShopCard
              key={item.id}
              name={item.value.name}
              price={item.value.price}
              color={item.value.color}
              img={item.value.img}
              view={view}
            />
          );
        })}
      </div>
    )
  );
}
CardsView.propTypes = {
  cards: PropTypes.array,
  view: PropTypes.string,
};
CardsView.defaultProps = {
  cards: [],
  view: "module",
};

export default CardsView;
