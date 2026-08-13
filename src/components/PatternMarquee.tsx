"use client";

import { motion } from "framer-motion";
import { Rosette } from "./Rosette";

const tones = [
  "text-coral",
  "text-salmon",
  "text-ink",
  "text-coral-dark",
  "text-salmon-soft",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 14 });
  return (
    <motion.div
      className="flex shrink-0 items-center gap-10 pr-10"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
    >
      {items.map((_, i) => (
        <Rosette
          key={i}
          fill="currentColor"
          className={`w-10 shrink-0 sm:w-14 ${tones[i % tones.length]}`}
        />
      ))}
    </motion.div>
  );
}

export function PatternMarquee() {
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden bg-coral/8 py-10"
    >
      <div className="flex w-[200%]">
        <Row />
        <Row />
      </div>
    </section>
  );
}
