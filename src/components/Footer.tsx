import Image from "next/image";
import { Rosette } from "./Rosette";
import { InstagramIcon, WhatsappIcon } from "./icons/SocialIcons";
import { whatsappLink } from "@/lib/whatsapp";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/escolainspirart/",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: whatsappLink("Olá! Vim pelo site da Inspirart e gostaria de mais informações."),
    icon: WhatsappIcon,
  },
];

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua das Artes, 123, São Paulo, SP");

type FooterLink = { label: string; href: string; external?: boolean };

const cols: { title: string; links: FooterLink[] }[] = [
  {
    title: "Ateliês",
    links: [
      { label: "Teatro", href: "#ateliers" },
      { label: "Dança", href: "#ateliers" },
      { label: "Ginástica Rítmica", href: "#ateliers" },
      { label: "Ballet", href: "#ateliers" },
      { label: "Música", href: "#ateliers" },
    ],
  },
  {
    title: "Escola",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Galeria", href: "#galeria" },
      { label: "Depoimentos", href: "#depoimentos" },
      {
        label: "Trabalhe conosco",
        href: whatsappLink(
          "Olá! Gostaria de saber mais sobre oportunidades de trabalho na Inspirart.",
        ),
        external: true,
      },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Rua das Artes, 123", href: mapsLink, external: true },
      { label: "São Paulo, SP", href: mapsLink, external: true },
      { label: "contato@inspirart.art", href: "mailto:contato@inspirart.art" },
      { label: "(11) 4002-8922", href: "tel:+551140028922" },
    ],
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
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-soft/10 text-cream-soft transition-colors hover:bg-cream-soft/20"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-cream-soft">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="hover:text-cream-soft transition-colors"
                    >
                      {l.label}
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
