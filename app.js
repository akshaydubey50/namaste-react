import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading-data" },
  "Hello People From React!"
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const head2 = React.createElement(
  "div",
  { id: "parent-container" },
  React.createElement("div", { id: "z" }, [
    React.createElement("h3", { className: "h3-heading" }, "child data carry"),
    React.createElement("p", { className: "p-wrapper" }, "sdsfdsfdfdf"),
  ])
);
root.render(head2);
