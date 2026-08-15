"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Rosette } from "./Rosette";

const programs = [
  {
    title: "Teatro",
    desc: "Expressão, criatividade e confiança para se comunicar e dar vida a diferentes personagens.",
    tone: "bg-coral text-cream-soft",
  },
  {
    title: "Dança",
    desc: "Movimento, ritmo e expressão corporal em aulas que estimulam técnica, criatividade e paixão pela dança.",
    tone: "bg-salmon text-coral-deep",
  },
  {
    title: "Música",
    desc: "Descubra o universo da música, desenvolvendo musicalidade, técnica e confiança para se expressar.",
    tone: "bg-ink text-cream-soft",
  },
  {
    title: "Ginástica Rítmica",
    desc: "Disciplina, coordenação e expressão através de movimentos que unem esporte, arte e beleza.",
    tone: "bg-salmon-soft text-coral-deep",
  },
  {
    title: "Ballet",
    desc: "Técnica, leveza e disciplina em uma experiência que transforma movimento em arte.",
    tone: "bg-coral-dark text-cream-soft",
  },
];

export function Programs() {
  return (
    <section id="ateliers" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
            Nossos ateliês
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Cinco caminhos para expressar o que você imagina.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group relative h-full overflow-hidden rounded-3xl bg-cream-soft p-8 shadow-sm ring-1 ring-ink/5"
              >
                <motion.div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl p-3 ${p.tone}`}
                  whileHover={{ rotate: 25 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 12,
                  }}
                >
                  <Rosette fill="currentColor" points={8} />
                </motion.div>

                <h3 className="font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.desc}
                </p>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral-dark opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba mais →
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}