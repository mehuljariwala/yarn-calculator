import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Maintenance from "./components/Maintenance/Maintenance.jsx";

// Set this to true to enable maintenance mode, false to show the normal application
const MAINTENANCE_MODE = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {MAINTENANCE_MODE ? (
      <Maintenance />
    ) : (
      <>
        <Header />
        <App />
      </>
    )}
  </React.StrictMode>
);
