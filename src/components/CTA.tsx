import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-coral py-24 text-center sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "url(/brand/pattern-tile.webp)",
          backgroundSize: "220px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-coral/0 via-coral/25 to-coral/60"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-cream-soft sm:text-4xl md:text-5xl">
            Vamos criar juntos?
          </h2>
          <p className="mt-4 text-cream-soft/85">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Agende
            uma visita e conheça nossos ateliês de perto.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream-soft shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Agendar visita
            </a>
            <a
              href="#"
              className="rounded-full border border-cream-soft/40 px-7 py-3.5 text-sm font-semibold text-cream-soft transition-colors hover:bg-cream-soft/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
