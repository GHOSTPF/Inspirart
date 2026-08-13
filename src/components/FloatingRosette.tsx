"use client";

import { motion } from "framer-motion";
import { Rosette } from "./Rosette";

export function FloatingRosette({
  className,
  fill,
  duration = 10,
  delay = 0,
  float = 18,
  rotate = 20,
}: {
  className?: string;
  fill?: string;
  duration?: number;
  delay?: number;
  float?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -float, 0],
        rotate: [0, rotate, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Rosette fill={fill} />
    </motion.div>
  );
}
