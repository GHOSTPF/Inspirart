import { Reveal } from "./Reveal";
import { Rosette } from "./Rosette";

const quotes = [
  {
    name: "Renata",
    role: "mãe do Ryan Vinicius",
    text: "“Obrigada, Prof Matheus, por tanto carinho e dedicação com o Ryan. Ele fica ansioso a cada aula e nunca reclamou porque tem que acordar cedo. Percebi que realmente ele gosta mesmo.”",
  },
  {
    name: "Márcia Célia",
    role: "mãe da Camila",
    text: "“Parabéns a todos os alunos da Inspirart, a apresentação foi linda. Meus parabéns para os professores e toda a equipe.”",
  },
  {
    name: "Elly",
    role: "mãe da Sophia Martins",
    text: "“Parabéns a todos os profissionais envolvidos, foi tudo muito lindo e emocionante... Amei! Minha Sophia está amando fazer parte dessa equipe, Inspirart.”",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Famílias que fazem parte da nossa história.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal
              key={q.name}
              delay={0.1 * i}
              className="flex h-full flex-col rounded-3xl bg-cream-soft p-8 shadow-sm ring-1 ring-ink/5"
            >
              <Rosette fill="currentColor" className="mb-6 w-8 text-salmon" />
              <p className="grow text-ink-soft leading-relaxed">{q.text}</p>
              <div className="mt-6">
                <p className="font-display font-semibold text-ink">
                  {q.name}
                </p>
                <p className="text-sm text-ink-soft">{q.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}