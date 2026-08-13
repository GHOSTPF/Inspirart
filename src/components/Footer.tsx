import Image from "next/image";
import { Rosette } from "./Rosette";

const cols = [
  {
    title: "Ateliês",
    links: ["Pintura", "Cerâmica", "Desenho", "Artes Cênicas", "Música", "Escultura"],
  },
  {
    title: "Escola",
    links: ["Sobre", "Galeria", "Depoimentos", "Trabalhe conosco"],
  },
  {
    title: "Contato",
    links: ["Rua das Artes, 123", "São Paulo, SP", "contato@inspirart.art", "(11) 4002-8922"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-16 text-cream-soft/70">
      <Rosette
        fill="currentColor"
        className="pointer-events-none absolute -bottom-20 -right-16 w-72 text-cream-soft/5"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo_mark_branco.png"
                alt=""
                width={352}
                height={240}
                className="h-6 w-auto"
              />
              <Image
                src="/brand/logo_wordmark_branco.png"
                alt="Inspirart"
                width={456}
                height={76}
                className="h-[18px] w-auto"
              />
            </div>
            <p className="mt-4 max-w-[22ch] text-sm">
              Um lugar para inspirar, criar e florescer.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-cream-soft">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-cream-soft transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-soft/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Inspirart. Todos os direitos reservados.</p>
          <p>Identidade visual &amp; site conceitual.</p>
        </div>
      </div>
    </footer>
  );
}
