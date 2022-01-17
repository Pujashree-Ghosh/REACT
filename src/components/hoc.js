import React from "react";

const updatedComponent = (OriginalComponent, incrementNumber) => {
  class newcomponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      // console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return newcomponent;
};

export default updatedComponent;
