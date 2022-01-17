import React, { Component } from "react";

class refs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default refs;

//callback ref

// class refs extends Component {
//   constructor(props) {
//     super(props);

//     this.inputRef = React.createRef();
//     this.cbRef = null;
//     this.setCbRef = (element) => {
//       this.cbRef = element;
//     };
//   }

//   componentDidMount() {
//     if (this.cbRef) {
//       this.cbRef.focus();
//     }

//     // this.inputRef.current.focus();
//     // console.log(this.inputRef);
//   }
//   clickHandler = () => {
//     alert(this.inputRef.value);
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRef} />
//         <input type="text" ref={this.setCbRef} />
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     );
//   }
// }

// export default refs;
