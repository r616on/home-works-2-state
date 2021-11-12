import products from "./data.json";
import "./Store.css";
import React from "react";
import IconSwitch from "./IconSwitch/IconSwitch";
import CardsView from "./CardsView/CardsView";

function Store() {
  return (
    <div className={"conteiner"}>
      <div className={"icon-row"}>
        <IconSwitch
          icon={"view_list"}
          onSwitch={() => console.log("change state here")}
        />
      </div>
      <div className={"shop-row"}>
        <CardsView cards={products} />
      </div>
    </div>
  );
}

export default Store;
