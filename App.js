import React from 'react'
import ReactDOM from 'react-dom'

console.log("React",React);
console.log("React",ReactDOM);

const heading1 = React.createElement("h1",{className : "heading1"}, "INDIA");
const heading2 = React.createElement("h3",{className : "heading3"}, "PAKISTAN");


const container1 = React.createElement("div",{className : "container"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);
