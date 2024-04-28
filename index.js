// const root=document.createElement("div");
// root.id="root";

// const heading=document.createElement("h1");
// heading.className="heading";
// heading.innerHTML="Hello World";

// root.appendChild(heading);

// document.body.appendChild(root);

// console.log("React",React);
//  console.log("React",ReactDOM);

// Lec-3 25-04-2024

const root = document.getElementById("root")
    // const heading1 = React.createElement("h1",{class:"heading1"},"heading1")
    // const heading2 = React.createElement("h2",{class:"heading2"},"heading2")
    const container1 = React.createElement("div", {class:"container1",style: { backgroundColor: "red" }},React.createElement("h1",{class:"heading1"},"heading1"))
    console.log(container1);         //not necessary in environment 
    const container2 = React.createElement("div",{class:"container2",style: { color: "yellow" }},React.createElement("h2",{class:"heading2"},"heading2"))
    const rootElement = ReactDOM.createRoot(root)
    rootElement.render([container1,container2])


    // const h1 =document.createElement("h1");
    // h1.innerText = "hello world";
    // document.body.appendChild(h1);
    // console.log("react",React);
    // console.log("react dom",ReactDOM);