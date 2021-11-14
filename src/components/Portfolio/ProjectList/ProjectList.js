import React from "react";
import "./ProjectList.css";
import PropTypes from "prop-types";
import shortid from "shortid";

function ProjectList(props) {
  let itemIndex = [];
  if (props.items.length > 0) {
    itemIndex = props.items.map((item) => ({
      id: shortid.generate(),
      value: item,
    }));
  } else {
    itemIndex = null;
  }

  return (
    <div className={"ProjectList-row"}>
      {itemIndex &&
        itemIndex.map((item) => {
          if (item.value.category === props.filter || props.filter === "All") {
            return (
              <img
                className={"ProjectList-img"}
                key={item.id}
                src={item.value.img}
                alt=""
              />
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}
ProjectList.propTypes = {
  filter: PropTypes.string,
  items: PropTypes.array,
};
ProjectList.defaultProps = {
  filter: "",
  items: [],
};

export default ProjectList;
