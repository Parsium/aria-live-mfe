import React from "react";
import ReactDOM from "react-dom/client";
import AppA from "app-a/App";
import AppB from "app-b/App";

const element = document.getElementById("root");
if (!element) throw new Error("main file was loaded before DOM.");

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <section
      id="app-a-wrapper"
      style={{
        margin: "16px 0",
        padding: "8px",
        backgroundColor: "#e9e5fa",
        border: "3px dashed blue",
      }}
    >
      <AppA />
    </section>
    <section
      id="app-b-wrapper"
      style={{
        margin: "16px 0",
        padding: "8px",
        backgroundColor: "#e2f9e3",
        border: "3px dashed green",
      }}
    >
      <AppB />
    </section>
  </React.StrictMode>
);
