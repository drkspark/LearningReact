import React from "react";
import ReactDOM from "react-dom/client";

// React Elementc=> Normal JS
const heading = (
    <h1 className='head' tabIndex='5'>
        Hello From React Element
    </h1>
);

const num = 3000;

// Arrow function is the Industry Standard
const Title = () => <h1>Call me Please</h1>;

// ! JSX can only have a Single Parent, below code gives error
// (
//     <div>
//     </div>
//     <div>

//     </div>
// )
// ? To solve this, we can use (This is an empty tag)<></> or <React.Fragment><React.Fragment/> provided by JSX

//! We can use {} inside JSX to write any JS code

// React Components
const Healer = () => (
    <div className='container'>
        {heading}
        {num}

        {/* We can render component by call the function too which is JS */}
        {Title()}
        <Title />
        <Title></Title>
        {/* All these 3 are same */}

        <h1 id='heading'>Rage Spell</h1>
    </div>
);

// JSX sanitizes data that's sent to {}, so it prevents Cross-Site-Scripting

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(</Healer>);
//? Both are Same
root.render(<Healer></Healer>);
