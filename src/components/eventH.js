//functionclick

// import React from "react";

// function click() {
//   function clickHandler() {
//     console.log("Button Clicked");
//   }
//   return (
//     <div>
//       <button onClick={clickHandler}>FClick</button>
//     </div>
//   );
// }

// export default click;

//classclick

// import React, { Component } from "react";

// class click extends Component {
//   clickHandler() {
//     console.log("Clicked");
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.clickHandler}>CClick</button>
//       </div>
//     );
//   }
// }

// export default click;

//--------------Binding Event--------------//

/* Approach 1: binding in the render method */

// import React, { Component } from "react";

// class bindclick extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hello",
//     };
//   }

//   clickHandler() {
//     this.setState({
//       message: "ByeBye1!",
//     });
//     console.log(this);
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>

//         <button onClick={this.clickHandler.bind(this)}>Button1</button>
//       </div>
//     );
//   }
// }

// export default bindclick;

/* Approach 2: using arrow function in the render method */

// import React, { Component } from "react";

// class bindclick extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hello",
//     };

//   }

//     clickHandler() {
//       this.setState({
//         message: "ByeBye2!",
//       });
//       console.log(this);
//     }

//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//             <button onClick={() => this.clickHandler()}>Button2</button>
//       </div>
//     );
//   }
// }

// export default bindclick;

/* Approach 3: Binding the click handler in the constructor    */

// import React, { Component } from "react";

// class bindclick extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hello",
//       };
//       this.clickHandler=this.clickHandler.bind(this)

//   }

//     clickHandler() {
//       this.setState({
//         message: "ByeBye3!",
//       });
//       console.log(this);
//     }

//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler}>Button3</button>
//       </div>
//     );
//   }
// }

// export default bindclick;

// Approach 4: Arrow function as a class property

import React, { Component } from "react";

class bindclick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Button4</button>
      </div>
    );
  }
}
export default bindclick;
