import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import("./Toolbar.css");

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  let itemIndex = [];
  if (filters.length > 0) {
    itemIndex = filters.map((item) => ({
      id: shortid.generate(),
      value: item,
    }));
  } else {
    itemIndex = null;
  }
  return (
    <div className={"Toolbar"}>
      <div className={"filters-row"}>
        {itemIndex &&
          itemIndex.map((item) => {
            return (
              <div
                key={item.id}
                className={`filters-item ${
                  selected === item.value && "active"
                }`}
                onClick={onSelectFilter}
              >
                {item.value}
              </div>
            );
          })}
      </div>
    </div>
  );
}
Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
Toolbar.defaultProps = {
  filters: [],
  selected: "All",
};
export default Toolbar;
