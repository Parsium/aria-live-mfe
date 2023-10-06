import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const element = document.getElementById("root");
if (!element) throw new Error("main file was loaded before DOM.");

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
