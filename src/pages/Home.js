import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/reason1BG.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
      <Header />
      <Hero image={Image} title="Luckiest guy alive" description="I never believed in luck until I found you." />
      <h2>Hola!</h2>
    </motion.div>
  );
};

export default Home;
