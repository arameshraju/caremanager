import React, { Component } from "react";
import { render } from "react-dom";
import { RouteApp } from "./router";
import { Home } from "./home";

import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Care Manager"
    };
  }

  render() {
    return <Home />;
  }
}

render(<App />, document.getElementById("root"));
