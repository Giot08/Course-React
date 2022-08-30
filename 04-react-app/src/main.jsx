import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App"
import Firstapp from "./Firstapp"
import Counter from "./Counter"

import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Firstapp title="Soy Gokú"/>
    <Counter value={1}/>
  </React.StrictMode>
);
