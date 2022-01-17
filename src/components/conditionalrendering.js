//If-Else Conditional Rendering

// import React, { Component } from "react";

// class Crendering extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>If -Else Conditional Rendering</div>;
//     } else {
//       return <div>You Need To Log In First</div>;
//     }
//   }
// }

// export default Crendering;

//Element Variables Conditional Rendering

// import React, { Component } from "react";

// class Crendering extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true,
//     };
//   }

//   render() {
//     let message;
//     if (this.state.isLoggedIn) {
//       message = <div>Conditional Rendering Using Element Variables</div>;
//     } else {
//       message = <div>You Need To Log In First</div>;
//     }
//     return <div>{message}</div>;
//   }
// }

// export default Crendering;

// Conditional Rendering Using Ternary Oprators

// import React, { Component } from "react";

// class Crendering extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true,
//     };
//   }

//   render() {
//     return this.state.isLoggedIn ? (
//       <div>Conditional Rendering Using Ternary Oprators</div>
//     ) : (
//       <div>You Need To Log In First</div>
//     );
//   }
// }

// export default Crendering;

// Conditional Rendering Using short circuit operator

import React, { Component } from "react";

class Crendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      this.state.isLoggedIn && (
        <div>Conditional Rendering Using Short Circuit Oprator</div>
      )
    );
  }
}

export default Crendering;
