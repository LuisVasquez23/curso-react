import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import HelloWorldApp from './HelloWorldApp';
import FirstApp from "./components/FirstApp";
import "./style.css";
import CounterApp from "./components/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title="Soy un titulo" subtitle='Soy un subitutlo'  /> */}
    <CounterApp counter={10} />
  </StrictMode>
);
