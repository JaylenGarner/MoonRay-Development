"use client";

import { motion } from "framer-motion";

const LoadIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default LoadIn;
