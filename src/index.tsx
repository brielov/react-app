import "./index.css";

import React, { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

/**
 * Uncomment the lines below if you want to use
 * the generated service worker. If you don't, feel
 * free to remove all of this.
 */
if ("serviceWorker" in navigator) {
  // import("workbox-window").then(({ Workbox }) => {
  //   const wb = new Workbox("/service-worker.js");
  //   wb.register();
  // });
}
