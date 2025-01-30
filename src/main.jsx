import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DrinkProvider from "./contexts/DrinkContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DrinkProvider>
      <App />
    </DrinkProvider>
  </StrictMode>
);
