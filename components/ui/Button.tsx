"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Variant = "primary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-[background-color,color,border-color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-ink shadow-[0_0_0_0_rgba(201,162,74,0)] hover:bg-gold-soft hover:shadow-[0_0_32px_-4px_rgba(201,162,74,0.65)]",
  ghost: "border border-line text-cream hover:border-gold hover:text-gold",
};

const MAGNETIC_STRENGTH = 0.4;
const MAGNETIC_MAX = 14;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function useMagnetic() {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(event: ReactMouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(clamp(relX * MAGNETIC_STRENGTH, -MAGNETIC_MAX, MAGNETIC_MAX));
    y.set(clamp(relY * MAGNETIC_STRENGTH, -MAGNETIC_MAX, MAGNETIC_MAX));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic();

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classes}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  const { type = "button", disabled, onClick } = props as ButtonAsButton;

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classes}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
