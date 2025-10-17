import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Showcase from "./components/ShowCase";
import Fetaures from "./components/Fetaures";
import Footer from "./components/Footer";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";

import { useEffect } from "react";

import ReactGA from "react-ga4";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Fetaures />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
