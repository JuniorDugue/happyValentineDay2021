import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/homeBG.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title="Luckiest guy alive" description="I never believed in luck until I found you.
"/>
      <h2>Hola!</h2>
    </div>
  );
};

export default Home;
