import React, { Component } from "react";
import updatedComponent from "./hoc";
class clickcount extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }
  //   incrementCount = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };
  //   render() {
  //     const { count } = this.state;
  //     return (
  //       <div>
  //         <button onClick={this.incrementCount}>
  //           {this.props.name}Clicked {count} times
  //         </button>
  //       </div>
  //     );
  //   }
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name}Clicked {count} times
        </button>
      </div>
    );
  }
}

export default updatedComponent(clickcount, 5);
