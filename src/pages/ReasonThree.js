import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/reason3BG.png";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";

const ReasonThree = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
      <Header />
      <Hero image={Image} title="I've traveled alot!" description="But my favorite place in the world is right next to you." />
      <h2>ReasonThree</h2>
    </motion.div>
  );
};

export default ReasonThree;
