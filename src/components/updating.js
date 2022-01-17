import React, { Component } from "react";
import LifecycleB from "./updatingB";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Constructor",
    };
    console.log("Lifecycle constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("Lifecycle componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Pujashree",
    });
  };

  render() {
    console.log("Lifecycle render");
    return (
      <div>
        <div>Lifecycle Methods</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default Lifecycle;
