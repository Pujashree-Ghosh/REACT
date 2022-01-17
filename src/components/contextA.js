import React, { Component } from "react";
import ContextB from "./contextB";

class ContextA extends Component {
  render() {
    return <ContextB />;
  }
}
export default ContextA;
