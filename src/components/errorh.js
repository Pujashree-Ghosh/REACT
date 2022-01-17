import React from "react";

function errorh({ name }) {
  if (name === "hi") {
    throw new Error("Not a name");
  }
  return <div>{name}</div>;
}

export default errorh;
