import React from "react";
import("./Toolbar.css");

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className={"Toolbar"}>
      <div className={"filters-row"}>
        {filters.map((item) => {
          return (
            <div
              key={item}
              className={`filters-item ${selected === item && "active"}`}
              onClick={onSelectFilter}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Toolbar;
