"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { div } from "motion/react-m";

export default function Home() {
  return (
    <div>

    <motion.main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <h1 className="text-2xl text-center text-white">
      Vishva Pansuriya
      </h1>   
      <HeroSection/> 
    </motion.main>

    <HeroSection/>
    </div>
  );
}
