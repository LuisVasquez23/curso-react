import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MultipleCustomHook from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <SimpleFormWiithCustomHook />
  // </StrictMode>
  <FocusScreen />
);
