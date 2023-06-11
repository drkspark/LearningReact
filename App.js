import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id='heading'>Hello JSX</h1>;

// If we write JSX in multiple lines, then we have to enclose it in () paranthesis
const divHeading = (
    <div id='home2' className='homiie'>
        <h2>Hello Hommie</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
