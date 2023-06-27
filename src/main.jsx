import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

if (!import.meta.env.VITE_REACT_APP_ENV) {
  console.error("Please define your environment");
}

export const env = import.meta.env.VITE_REACT_APP_ENV;

const dev = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const prod = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  env == "production" ? prod : dev
);
