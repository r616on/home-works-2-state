import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import "./desktop.scss";

function Dropdown({ arr }) {
  const [active, setActive] = useState("Profile Information");
  let arrIndex = [];
  if (arr.length > 0) {
    arrIndex = arr.map((item) => ({
      id: shortid.generate(),
      value: item,
    }));
  } else {
    arrIndex = null;
  }
  return (
    arrIndex && (
      <ul data-id="dropdown" className="dropdown">
        {arrIndex.map((item) => {
          return (
            <li
              key={item.id}
              style={active === item.value.name ? { color: "#5380f7" } : {}}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.value.name);
              }}
            >
              <a href={item.value.link}>{item.value.name}</a>
            </li>
          );
        })}
      </ul>
    )
  );
}

Dropdown.propTypes = {
  arr: PropTypes.array,
};
Dropdown.defaultProps = {
  arr: [],
};
export default Dropdown;
