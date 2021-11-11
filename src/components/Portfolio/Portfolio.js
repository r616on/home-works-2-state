import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import "./Portfolio.css";
import data from "./data.json";
import ProjectList from "../ProjectList/ProjectList";

export class Portfolio extends Component {
  constructor() {
    super();
    this.state = { filter: "All" };
  }

  render() {
    return (
      <div className={"Portfolio"}>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.filter}
          onSelectFilter={(filter) => {
            this.setState(() => {
              return { filter: filter.target.innerText };
            });
          }}
        />
        <ProjectList items={data} filter={this.state.filter} />
      </div>
    );
  }
}

export default Portfolio;
