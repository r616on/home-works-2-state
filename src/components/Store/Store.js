import products from "./data.json";
import "./Store.css";
import React, { useState } from "react";
import IconSwitch from "./IconSwitch/IconSwitch";
import CardsView from "./CardsView/CardsView";

function Store() {
  const [view, setView] = useState("module");

  return (
    <div className={"container-Store"}>
      <div className={"icon-row"}>
        <IconSwitch
          icon={view === "module" ? "view_list" : "view_module"}
          onSwitch={() => {
            if (view === "module") {
              setView("list");
            } else {
              setView("module");
            }
          }}
        />
      </div>
      <div className={"shop-row"}>
        <CardsView cards={products} view={view} />
      </div>
    </div>
  );
}

export default Store;
