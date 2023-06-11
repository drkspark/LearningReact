/**
 * How to create nested elements ?
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am a H1 Tag inside Div's</h1>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        // This is the place for the Children i.e we
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I am a H1 Tag inside Div's")
    )
); // {} : Attribute to the tag

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
