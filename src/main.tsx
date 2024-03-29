import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./main.css";

const rootNode = document.getElementById("root");

if (!rootNode) {
  throw new Error("Root node not found");
}

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
