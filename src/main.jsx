import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

if (GA_ID) {
  ReactGA.initialize(GA_ID);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
} else {
  console.warn("Google Analytics ID not found in environment.");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
