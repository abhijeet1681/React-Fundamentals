import React from 'react'
import ReactDOM from 'react-dom/client'

console.log("React",React);
console.log("React",ReactDOM);

const heading1 = React.createElement("h1",{className : "heading1"}, "INDIA (IND)");
console.log("heading1", heading1);

const heading11 = <h1 className="heading1">Heading11</h1>
console.log("heading11", heading11);

const Component = () =>{
    const name = "dummy name";
    return(
    <div>
    <>I am a functional Component.</>
        <h1 style={{backgroundColor:"orange",fontSize:"18px"}}>I am a heading with {name} name.</h1>
    </div>
    )
}

const Component1 = () => <div>I am a functional Component.</div>

function Component2() {
    return(
    <div>I am a functional Component : I am a javascript function that returns some piece of JSX</div>
    // <>I am a functional Component : I am a javascript function that returns some piece of JSX</>
    // <React.Fragment>I am a functional Component : I am a javascript function that returns some piece of JSX</React.Fragment>
    )
}

const heading2 = React.createElement("h2",{className : "heading3"}, "PAKISTAN (PAK)");


const container1 = React.createElement("div",{className : "container"}, [heading1, heading11, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container1);
root.render(<Component/>);
// root.render(<Component></Component>);
// root.render(Component());
