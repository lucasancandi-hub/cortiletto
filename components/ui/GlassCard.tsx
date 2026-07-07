"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={`rounded-2xl border border-line bg-cream/[0.04] shadow-[0_8px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-colors duration-300 hover:border-gold/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}
