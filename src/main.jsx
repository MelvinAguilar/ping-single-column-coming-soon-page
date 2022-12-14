import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ToastContainer from "./components/ToastContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
