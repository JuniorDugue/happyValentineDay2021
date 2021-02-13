import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/contactBG.png";

const Contact = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title="Love Drunk" description="We go together like wine and any day of the week.
" />
      <h2>Contact</h2>
    </div>
  );
};

export default Contact;
