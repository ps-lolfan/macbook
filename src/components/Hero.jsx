import React from "react";
import { logEvent } from "../analytics";

const Hero = () => {
  const handleClick = () => {
    logEvent("buy_button_click", "CTA", "Hero Section");
  };
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook title" />
      </div>
      <video src="/videos/hero.mp4" autoPlay muted playsInline />
      <button onClick={handleClick}>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
