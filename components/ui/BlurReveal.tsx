"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type BlurRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function BlurReveal({ children, className = "", delay = 0 }: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(18px)", scale: 1.04 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
