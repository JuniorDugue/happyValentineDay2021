import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/reason2BG.png";
import { motion } from "framer-motion";
import { animationFour, transition } from "../animations";

const ReasonTwo = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationFour} transition={transition}>
      <Header />
      <Hero image={Image} title="Though You can't buy love" description="I’m yours. Sorry no refunds or exchanges." />
      <h2>ReasonTwo</h2>
    </motion.div>
  );
};

export default ReasonTwo;
