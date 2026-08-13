"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Rosette } from "./Rosette";

const programs = [
  {
    title: "Pintura",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    tone: "bg-coral text-cream-soft",
  },
  {
    title: "Cerâmica",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    tone: "bg-salmon text-coral-deep",
  },
  {
    title: "Desenho",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
    tone: "bg-ink text-cream-soft",
  },
  {
    title: "Artes Cênicas",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    tone: "bg-salmon-soft text-coral-deep",
  },
  {
    title: "Música",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    tone: "bg-coral-dark text-cream-soft",
  },
  {
    title: "Escultura",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    tone: "bg-cream-soft text-coral-deep border border-ink/10",
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
            Seis caminhos para expressar o que você imagina.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl bg-cream-soft p-8 shadow-sm ring-1 ring-ink/5"
              >
                <motion.div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl p-3 ${p.tone}`}
                  whileHover={{ rotate: 25 }}
                  transition={{ type: "spring", stiffness: 260, damping: 12 }}
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
