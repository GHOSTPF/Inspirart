"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/brand";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 14 });
  return (
    <motion.div
      className="flex shrink-0 items-center gap-10 pr-10"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
    >
      {items.map((_, i) => (
        <div key={i} className="relative aspect-square w-10 shrink-0 sm:w-14">
          <Image
            src={BRAND_LOGOS[i % BRAND_LOGOS.length]}
            alt=""
            fill
            sizes="56px"
            className="object-contain"
          />
        </div>
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
