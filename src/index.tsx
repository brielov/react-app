import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { SWRConfig, SWRConfiguration } from "swr";
import { StrictMode } from "react";
import { createRoot } from "react-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const config: SWRConfiguration = {
  suspense: true,
};

const rootNode = document.getElementById("root");

rootNode &&
  createRoot(rootNode).render(
    <StrictMode>
      <Router>
        <SWRConfig value={config}>
          <App />
        </SWRConfig>
      </Router>
    </StrictMode>
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
