import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./main.css";

const rootNode = document.getElementById("root");

rootNode &&
  createRoot(rootNode).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
