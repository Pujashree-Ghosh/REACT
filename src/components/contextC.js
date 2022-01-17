import React, { Component } from "react";
import { UserConsumer } from "./usercontext";

class ContextC extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          console.log(value);
          return <div>Hello {value}</div>;
        }}
      </UserConsumer>
    );
  }
}
export default ContextC;
