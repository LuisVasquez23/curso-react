import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SimpleFormWiithCustomHook from "./01-useEffect/SimpleFormWithCustomHook";
import MultipleCustomHook from "./03-examples/MultipleCustomHook";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <SimpleFormWiithCustomHook />
  // </StrictMode>
  <MultipleCustomHook />
);
