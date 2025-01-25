import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { JournalApp } from "./JournalApp";
import { StrictMode } from "react";
import { AppTheme } from "./theme/AppTheme";

import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </BrowserRouter>
  </StrictMode>
);
