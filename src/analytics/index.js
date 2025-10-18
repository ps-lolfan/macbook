import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;
let initialized = false;

export function initGA() {
  if (!initialized && GA_ID) {
    ReactGA.initialize(GA_ID);
    initialized = true;
    console.log("✅ Google Analytics initialized");
  }
}

export function logPageView(path = window.location.pathname) {
  if (!initialized) initGA();
  ReactGA.send({ hitType: "pageview", page: path });
}

export function logEvent(
  action,
  category = "event",
  label = "",
  value = undefined
) {
  if (!initialized) initGA();
  ReactGA.event({ category, action, label, value });
}
