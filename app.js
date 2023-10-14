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
    React.createElement("h3", { class: "h3-heading" }, "child data carry"),
    React.createElement("p", { class: "p-wrapper" }, "paragraph data carry"),
  ])
);
root.render(head2);
