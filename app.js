import React from "react";
import ReactDOM from "react-dom/client";

const head2 = (
  <h1>
    Namaste to Akshay React Park and we will se how to get better understanding
    of react
  </h1>
);
console.log(head2)

const Title =()=>{
  return(<h1>React Title Component</h1>)
}

const Detail = <p>Demo test Data check</p>

const HeadingComponent = ()=>(
  <div>
  {Detail}
  <Title/>
  <h1>Hello React Component, We are learning that only</h1>
  </div>
  
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


root.render(<HeadingComponent/>);
