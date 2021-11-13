import React, { useState } from "react";
import "./desktop.scss";

function Dropdown({ arr }) {
  const [active, setActive] = useState("Profile Information");
  return (
    <ul data-id="dropdown" className="dropdown">
      {arr.map((item, index) => {
        return (
          <li
            key={index}
            style={active === item.name ? { color: "#5380f7" } : {}}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.name);
            }}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
