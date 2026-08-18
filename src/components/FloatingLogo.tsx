"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FloatingLogo({
  className,
  src,
  duration = 10,
  delay = 0,
  float = 18,
  rotate = 20,
}: {
  className?: string;
  src: string;
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
      <Image src={src} alt="" fill sizes="224px" className="object-contain" />
    </motion.div>
  );
}
