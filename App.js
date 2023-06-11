import React from "react";
import ReactDOM from "react-dom/client";

// This is how we create a React ele using core React
// Flow: React.createElement => ReactElement-JS Object => HTML Element(render)
const heading = React.createElement("h1", { id: "heading" }, "Hello React");

console.log(heading);

// JSX - HTML like or XML-like syntax
// This is how we create a React element using JSX

// Flow: JSX(via Babel) => React.createElement => ReactElement-JS Object => HTML Element(render)
const jsxHeading = <h1 id="heading2">Hello JSX</h1>;

// JSX isn't pure JS

// JSX code is transpiled(By parcel via Babel) before it reaches the Browser JS engine. 

console.log(jsxHeading);


// Both of them are objects

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
