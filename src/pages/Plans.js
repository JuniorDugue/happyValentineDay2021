import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/eventsBG.png";

const Plans = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title="Though You can't buy love" description="I’m yours. Sorry no refunds or exchanges.
" />
      <h2>Plans</h2>
    </div>
  );
};

export default Plans;
