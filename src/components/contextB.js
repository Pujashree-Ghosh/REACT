import React, { Component } from "react";
import UserContext from "./usercontext";
import ContextC from "./contextC";

class ContextB extends Component {
  //   static contextType = UserContext;
  render() {
    return (
      <div>
        Component B Context {this.context}
        <ContextC />
      </div>
    );
  }
}

ContextB.contextType = UserContext;
export default ContextB;
