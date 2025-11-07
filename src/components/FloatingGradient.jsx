import React from "react";
import { motion } from "framer-motion";

export default function FloatingGradient(){
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="floating-gradient"
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
    />
  );
}
