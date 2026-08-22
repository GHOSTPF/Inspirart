import Image from "next/image";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { value: 3, suffix: "", label: "anos de história" },
  { value: 350, suffix: "+", label: "inspirados ativos" },
  { value: 12, suffix: "", label: "professores e mestres" },
  { value: 5, suffix: "", label: "escolas diferentes" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-cream-soft py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-24 top-1/2 aspect-square w-[26rem] -translate-y-1/2 opacity-40">
        <Image src="/brand/logo_salmao.png" alt="" fill sizes="416px" className="object-contain" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          
          {/* TEXTO */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
              Sobre a Inspirart
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Uma escola construída pelo amor à arte e pelo propósito de ensinar.
            </h2>

            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              <p>
                A Inspirart nasceu da paixão pela arte e pelo desejo de ensinar, criando um espaço onde crianças, jovens e adultos podem desenvolver habilidades, criatividade e confiança por meio da expressão artística.
              </p>

              <p>
                Com uma trajetória ligada à dança, ginástica, música e outras formas de arte, a Inspirart cresceu junto com seus alunos e sua comunidade, transformando aulas em experiências e momentos em histórias.
              </p>

              <p className="font-medium text-ink">
                Mais do que uma escola, a Inspirart é um espaço de expressão, aprendizado e transformação, onde a arte inspira, ensina e transforma vidas.
              </p>

              <p className="font-display italic text-coral-dark">
                Inspirar é viver a arte e a arte inspira viver — é assim que cada inspirado vive a Inspirart.
              </p>

            </div>
          </Reveal>

          {/* ESTATÍSTICAS */}
          {/* <Reveal delay={0.15}>
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

                  <p className="mt-2 text-sm text-ink-soft">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal> */}

        </div>
      </div>
    </section>
  );
}