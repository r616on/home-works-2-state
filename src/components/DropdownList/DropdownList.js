import React, { useState } from "react";
import "./desktop.scss";
import Dropdown from "./Dropdown/Dropdown";
const dropdownListArr = [
  { name: "Profile Information", link: "#" },
  { name: "Change Password", link: "#" },
  { name: "Become PRO", link: "#" },
  { name: "Help", link: "#" },
  { name: "Log Out", link: "#" },
];

function DropdownList() {
  const [dropdownOpen, setDropdownOpen] = useState(0);
  return (
    <div className={"body"}>
      <div className="container">
        <div
          data-id="wrapper"
          className={`dropdown-wrapper ${dropdownOpen ? "open" : ""}  `}
        >
          <button
            data-id="toggle"
            className="btn"
            onClick={() => {
              setDropdownOpen((dr) => !dr);
            }}
          >
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          <Dropdown arr={dropdownListArr} />
        </div>
      </div>
    </div>
  );
}

export default DropdownList;
