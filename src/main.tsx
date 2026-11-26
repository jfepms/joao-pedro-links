import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Tema opcional em personal/theme.css (fora do Git), carregado depois do CSS base para sobrescrevê-lo.
import.meta.glob("../personal/theme.css", { eager: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
