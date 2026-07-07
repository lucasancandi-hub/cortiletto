"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const prefersReducedMotion = useReducedMotion();

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 220, damping: 22 });
  const shadowX = useSpring(useTransform(rotateY, [-7, 7], [16, -16]), { stiffness: 220, damping: 22 });
  const shadowY = useSpring(useTransform(rotateX, [-7, 7], [-16, 16]), { stiffness: 220, damping: 22 });
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 36px -14px rgba(0,0,0,0.6)`;
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${spotX}% ${spotY}%, rgba(201,162,74,0.14), transparent 70%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    spotX.set(relX * 100);
    spotY.set(relY * 100);
    if (prefersReducedMotion) return;
    x.set(relX - 0.5);
    y.set(relY - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        boxShadow,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative isolate rounded-2xl ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: spotlight }}
      />
      {children}
    </motion.div>
  );
}
