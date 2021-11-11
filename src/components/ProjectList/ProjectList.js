import React from "react";
import "./ProjectList.css";

function ProjectList(props) {
  return (
    <div className={"ProjectList-row"}>
      {props.items.map((item, index) => {
        if (item.category === props.filter || props.filter === "All") {
          return (
            <img
              className={"ProjectList-img"}
              key={index}
              src={item.img}
              alt=""
            />
          );
        } else {
          return false;
        }
      })}
    </div>
  );
}

export default ProjectList;
