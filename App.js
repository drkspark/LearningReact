import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a H1 Tag inside Div's"),
        React.createElement("h2", {}, "I am a H2 Tag inside Div's"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a H1 Tag inside Div's"),
        React.createElement("h2", {}, "I am a H2 Tag inside Div's"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
