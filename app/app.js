import "./stayle/main.css" 
import test from "./test1";
import React from "react"
import ReactDOM from "react-dom"


function App() {
    return (
      <div className="App">
       <h1>ahmed</h1>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("App"))

console.log(test(10))