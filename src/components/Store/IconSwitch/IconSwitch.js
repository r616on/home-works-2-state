import React from "react";
import "./IconSwitch.css";
import PropTypes from "prop-types";

function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons" onClick={onSwitch}>
      {icon}
    </span>
  );
}
IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};
IconSwitch.defaultProps = {
  icon: "module",
};

export default IconSwitch;
