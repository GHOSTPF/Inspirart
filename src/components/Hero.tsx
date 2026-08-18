"use client";

import { motion } from "framer-motion";
import { FloatingLogo } from "./FloatingLogo";
import { whatsappLink } from "@/lib/whatsapp";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero({ revealed }: { revealed: boolean }) {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-28 pb-20 flex items-center bg-cream"
    >
      {/* decorative brand marks */}
      <FloatingLogo
        className="pointer-events-none absolute -left-14 top-24 aspect-square w-40"
        src="/brand/logo_salmao.png"
        duration={9}
        float={14}
        rotate={12}
      />
      <FloatingLogo
        className="pointer-events-none absolute right-[6%] top-40 aspect-square w-24 opacity-30"
        src="/brand/logo_laranja.png"
        duration={7}
        delay={0.5}
        float={10}
        rotate={-15}
      />
      <FloatingLogo
        className="pointer-events-none absolute left-[8%] bottom-10 aspect-square w-20 opacity-20"
        src="/brand/logo_azul.png"
        duration={11}
        delay={1}
        float={16}
        rotate={18}
      />
      <FloatingLogo
        className="pointer-events-none absolute -right-10 bottom-0 aspect-square w-56 opacity-70"
        src="/brand/logo_escuro.png"
        duration={13}
        delay={0.3}
        float={20}
        rotate={-10}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate={revealed ? "show" : "hidden"}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 rounded-full bg-salmon-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coral-deep"
        >
          Matrículas abertas 2026
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          Onde a arte inspira, <span className="text-coral">transforma</span>. e
          <br />
          ganha <span className="text-coral">forma</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base text-ink-soft sm:text-lg"
        >
          Na Inspirart, transformamos a arte em experiências de aprendizado, expressão e desenvolvimento. Criamos espaços onde crianças, jovens e adultos podem descobrir novas habilidades, explorar a criatividade e se conectar com diferentes formas de arte.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 font-display text-sm italic text-coral-dark sm:text-base"
        >
          Inspirar é viver a arte e a arte inspira viver.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#escolas"
            className="rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-cream-soft shadow-lg shadow-coral/30 transition-transform hover:-translate-y-0.5 hover:bg-coral-dark"
          >
            Conheça as escolas
          </a>
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma visita para conhecer a Inspirart.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-coral hover:text-coral-dark"
          >
            Agende uma visita
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-soft/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            role
          </span>
          <div className="h-8 w-px bg-current" />
        </motion.div>
      </motion.div>
    </section>
  );
}
