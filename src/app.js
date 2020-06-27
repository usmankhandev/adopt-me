import React from "react";
import ReactDOM from "react-dom";

const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.age),
  ]);
};

const app = () => {
  return React.createElement("div", { id: "pet" }, [
    React.createElement(pet, {
      name: "jack",
      age: 10,
      breed: "german shepard",
    }),
    React.createElement(pet, { name: "ace", age: 11, breed: "german shepard" }),
    React.createElement(pet, {
      name: "tiken",
      age: 12,
      breed: "german shepard",
    }),
    React.createElement(pet, {
      name: "tiger",
      age: 13,
      breed: "german shepard",
    }),
  ]);
};
ReactDOM.render(React.createElement(app), document.getElementById("root"));
export default app;
