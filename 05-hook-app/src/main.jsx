import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MultipleCustomHook from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import Layout from "./05-useLayoutEffect/Layout";
import Memorize from "./06-memos/Memorize";
import MemoHook from "./06-memos/MemoHook";
import TodoApp from "./08-useReducer/TodoApp";
//import "./08-useReducer/intro-reducer";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <SimpleFormWiithCustomHook />
  // </StrictMode>
  <TodoApp />
);
