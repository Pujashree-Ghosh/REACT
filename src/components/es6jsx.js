import React, { Component } from "react";

//ES6

const f = () => <h1>Functional component</h1>;

// exorting using named experts

export const f = () => <h1>Functional component</h1>;

//with jsx

const j = () => {
  return (
    <div className="abc">
      <h1>Hello JSX</h1>
    </div>
  );
};

export default j;

// without jsx

// const j = () => {
//   return React.createElement("div", null, "without jsx");
// };

// export default j;
