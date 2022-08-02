import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundo } from "./HolaMundo";
import { FirstComponent } from "./FirstComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HolaMundo />
    <FirstComponent />
  </React.StrictMode>
);
