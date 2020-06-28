import React from "react";
import { useState } from "react";
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

export default Pet;
