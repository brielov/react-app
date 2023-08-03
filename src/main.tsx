import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "./app.tsx";

const rootNode = document.getElementById("root")!;

rootNode &&
  createRoot(rootNode).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
