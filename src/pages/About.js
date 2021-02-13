import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/aboutBG.png";

const About = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title="I've traveled alot!" description="But my favorite place in the world is right next to you.
"/>
      <h2>About</h2>
    </div>
  );
};

export default About;
