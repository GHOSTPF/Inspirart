import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Rosette } from "./Rosette";

const stats = [
  { value: 18, suffix: "", label: "anos de história" },
  { value: 640, suffix: "+", label: "alunos ativos" },
  { value: 32, suffix: "", label: "professores e mestres" },
  { value: 12, suffix: "", label: "ateliês diferentes" },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream-soft py-24 sm:py-32">
      <Rosette
        fill="currentColor"
        className="pointer-events-none absolute -right-24 top-1/2 w-[26rem] -translate-y-1/2 text-salmon-soft/40"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
              Sobre a Inspirart
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Uma escola construída em volta da imaginação de cada aluno.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={0.1 * i}
                  className="rounded-3xl border border-ink/5 bg-cream p-6 shadow-sm sm:p-8"
                >
                  <p className="font-display text-4xl font-bold text-coral sm:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
