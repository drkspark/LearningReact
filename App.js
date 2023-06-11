import React from "react";
import ReactDOM from "react-dom/client";

// React Component
// Class Based Components - OLD
// Functional Based Components - NEW

// React Functional Component is just a JS function which return JSX
// Always start name of a Component with capital alphabet

// This is a React Element
const heading = (
    <h1 className='head' tabIndex='5'>
        Namaste React using JSX
    </h1>
);

// These are React Components
//? Return is optional when we make components using Arrow Functions

function Heading() {
    // return is Mandatory
    return <h1 id='heading'>Hello Functional Component</h1>;
}

//? Component Composition is Nesting of Components 
const Healer = () => (
    <div className='container'>
        <Heading />
        <h1 id='heading'>Rage Spell</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//! To render a component we need to enclose it inside <ComponentName />

root.render(<Healer />);
//? root.render(heading);  // This is a React Element
