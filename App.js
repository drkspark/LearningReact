import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Hello React");

console.log(heading); // Gives the Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
