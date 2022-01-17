// import logo from "./logo.svg";
import React from "react";
// import React, { Component } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import errorboundary from "./components/errorboundary";
// import FCOMP from "./components/functional";
// import CCOMP from "./components/classcomp";
// import ESJSX from "./components/es6jsx";
// import STATEPROPS from "./components/stateprops";
// import Mounting from "./components/mounting";
// import Updating from "./components/updating";
// import UpdatingB from "./components/updatingB";
// import LIFTING from "./components/liftingstateup";
// import ClickCount from "./components/clickcounter";
// import HoverCount from "./components/hovercounter";
// import HOC from "./components/hoc";
// import Click from "./components/eventH";
// import Rendering from "./components/conditionalrendering";
// import Error from "./components/errorh";
// import Errorboundary from "./components/errorboundary";
// import Form from "./components/form";
// import Refs from "./components/refs";
import ContextA from "./components/contextA";
import { UserProvider } from "./components/usercontext";

function App() {
  return (
    <div className="App">
      {/* Bootstrap */}
      {/* <React.Fragment> */}
      {/* <h1> Bootstrap</h1> */}
      {/* <button className="btn btn-success">Enter</button> */}
      {/* </React.Fragment> */}
      {/* error handling phase */}
      {/* <Errorboundary>
        <Error name="Ram"></Error>
      </Errorboundary>
      <Errorboundary>
        <Error name="Shyam"></Error>{" "}
      </Errorboundary>
      <Errorboundary>
        <Error name="hi"></Error>{" "}
      </Errorboundary> */}
      {/* forms */}
      {/* <Form></Form> */}
      {/* <Updating /> */}
      {/* <UpdatingB /> */}
      {/* <ClickCount name="PUJASHREE" /> */}
      {/* <HoverCount /> */}
      {/* <HOC /> */}
      {/* <Refs /> */}
      {/* context */}
      <UserProvider value="Pujashree">
        <ContextA />
      </UserProvider>
    </div>
  );
}

//liftingstateup

// class App extends Component {
//   // state = {
//   //   name: "Sita",
//   //   mark: 15,
//   // };
//   render() {
//     return (
//       <div>
//         {/* <LIFTING name={this.state.name} />
//         <LIFTING number={this.state.mark} /> */}
//         <HOC />
//       </div>
//     );
//   }
// }

export default App;
