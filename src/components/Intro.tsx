"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Phase = "falling" | "hold" | "leaving" | "done";

type Piece = {
  src: string;
  top: string;
  left: string;
  size: number;
  delay: number;
  rotateFrom: number;
  rotateTo: number;
  stiffness: number;
};

const pieces: Piece[] = [
  { src: "/brand/logo_estrela.png", top: "14%", left: "10%", size: 84, delay: 0, rotateFrom: -18, rotateTo: -6, stiffness: 130 },
  { src: "/brand/logo_mark_coral.png", top: "58%", left: "6%", size: 64, delay: 0.09, rotateFrom: 14, rotateTo: -8, stiffness: 150 },
  { src: "/brand/logo_azul.png", top: "30%", left: "24%", size: 58, delay: 0.18, rotateFrom: -10, rotateTo: 8, stiffness: 140 },
  { src: "/brand/logo_mark_navy.png", top: "68%", left: "30%", size: 70, delay: 0.05, rotateFrom: 8, rotateTo: -10, stiffness: 135 },
  { src: "/brand/logo_laranja.png", top: "12%", left: "42%", size: 60, delay: 0.26, rotateFrom: -14, rotateTo: 6, stiffness: 145 },
  { src: "/brand/logo_mark_mustard.png", top: "72%", left: "48%", size: 56, delay: 0.34, rotateFrom: 16, rotateTo: -12, stiffness: 150 },
  { src: "/brand/logo_salmao.png", top: "20%", left: "62%", size: 58, delay: 0.14, rotateFrom: -8, rotateTo: 10, stiffness: 140 },
  { src: "/brand/logo_escuro.png", top: "64%", left: "68%", size: 48, delay: 0.4, rotateFrom: 6, rotateTo: -6, stiffness: 155 },
  { src: "/brand/logo_mark_preto.png", top: "16%", left: "82%", size: 66, delay: 0.22, rotateFrom: -12, rotateTo: 9, stiffness: 140 },
  { src: "/brand/logo_estrela.png", top: "56%", left: "88%", size: 52, delay: 0.3, rotateFrom: 12, rotateTo: -8, stiffness: 150 },
];

export function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("falling");
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setSkip(true);
      onDone();
      return;
    }
    document.body.classList.add("no-scroll");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase === "hold") {
      const t = setTimeout(() => setPhase("leaving"), 500);
      return () => clearTimeout(t);
    }
    if (phase === "leaving") {
      document.body.classList.remove("no-scroll");
      onDone();
      const t = setTimeout(() => setPhase("done"), 900);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (skip) return null;

  const wordmarkDelay = 0.58;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-cream-soft"
          initial={{ y: 0 }}
          animate={phase === "leaving" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] as const }}
        >
          {pieces.map((p, i) => (
            <motion.div
              key={`${p.src}-${i}`}
              className="pointer-events-none absolute"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
              initial={{ y: -900 - i * 40, opacity: 0, rotate: p.rotateFrom, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, rotate: p.rotateTo, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: p.stiffness,
                damping: 14,
                delay: p.delay,
              }}
            >
              <Image
                src={p.src}
                alt=""
                width={200}
                height={200}
                className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(43,34,29,0.18)]"
              />
            </motion.div>
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 w-[70vw] max-w-xs -translate-x-1/2 -translate-y-1/2 sm:max-w-sm"
            initial={{ y: -900, opacity: 0, scale: 0.7 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 130, damping: 15, delay: wordmarkDelay }}
            onAnimationComplete={() => {
              if (phase === "falling") setPhase("hold");
            }}
          >
            <Image
              src="/brand/logo_wordmark_preto.png"
              alt="Inspirart"
              width={456}
              height={76}
              priority
              className="h-auto w-full drop-shadow-[0_14px_24px_rgba(43,34,29,0.2)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
