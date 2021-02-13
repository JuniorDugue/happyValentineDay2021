import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/reason4BG.png";
import { motion } from "framer-motion";
import { animationThree, transition } from "../animations";

const ReasonFour = () => {
  return (
    <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transition}>
      <Header />
      <Hero image={Image} title="Love Drunk" description="We go together like wine and any day of the week." />
      <h2>ReasonFour</h2>
    </motion.div>
  );
};

export default ReasonFour;
