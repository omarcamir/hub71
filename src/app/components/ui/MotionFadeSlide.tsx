"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeSlideProps {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export default function MotionFadeSlide({
  children,
  delay = 0,
  y = 24,
}: MotionFadeSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
