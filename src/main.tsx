import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "~/app";
import "~/main.css";

const root = document.getElementById("root");

root &&
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
