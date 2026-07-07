"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

type LogomarkProps = {
  className?: string;
  animate?: boolean;
};

const Logomark = forwardRef<SVGSVGElement, LogomarkProps>(function Logomark(
  { className = "", animate = false },
  ref
) {
  return (
    <svg ref={ref} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M8 40V22a16 16 0 0 1 32 0v18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={animate ? { duration: 1.4, ease: "easeInOut" } : undefined}
      />
      <motion.circle
        cx="24"
        cy="17"
        r="2.2"
        fill="currentColor"
        initial={animate ? { scale: 0, opacity: 0 } : undefined}
        animate={animate ? { scale: 1, opacity: 1 } : undefined}
        transition={animate ? { duration: 0.5, delay: 1.1, ease: "backOut" } : undefined}
      />
    </svg>
  );
});

export default Logomark;
