import Image from "next/image";
import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from "./icons/SocialIcons";
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

type School = { name: string; address: string };

const schools: School[] = [
  {
    name: "Unidade Mangabeira",
    address: "Rua Creusa Campos de Vasconcelos, 69 - Mangabeira",
  },
  {
    name: "Unidade Costa e Silva",
    address: "Rua Jornalista Professor José Ramalho, 305 - Costa e Silva",
  },
  {
    name: "Unidade Bayeux",
    address: "R. Santa Luzia, 116 - Brasília, Bayeux - PB, 58307-320",
  },
];

function mapsLinkFor(address: string) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${address}, Paraíba`)
  );
}

function mapsEmbedFor(address: string) {
  return (
    "https://www.google.com/maps?q=" +
    encodeURIComponent(`${address}, Paraíba`) +
    "&output=embed"
  );
}

type FooterLink = { label: string; href: string; external?: boolean };

const cols: { title: string; links: FooterLink[] }[] = [
  {
    title: "Escolas",
    links: [
      { label: "Teatro", href: "#escolas" },
      { label: "Dança", href: "#escolas" },
      { label: "Ginástica Rítmica", href: "#escolas" },
      { label: "Ballet", href: "#escolas" },
      { label: "Música", href: "#escolas" },
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
];

const contact = [
  { label: "Inspirartescolaartistica@gmail.com", href: "mailto:Inspirartescolaartistica@gmail.com", icon: MailIcon },
  { label: "(83) 99800-7533", href: "tel:+5583998007533", icon: PhoneIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-16 text-cream-soft/70">
      <div className="pointer-events-none absolute -bottom-20 -right-16 aspect-square w-72 opacity-5">
        <Image src="/brand/logo_salmao.png" alt="" fill sizes="288px" className="object-contain" />
      </div>
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

          <div>
            <p className="text-sm font-semibold text-cream-soft">Contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {contact.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <c.icon className="h-4 w-4 shrink-0" />
                  <a href={c.href} className="hover:text-cream-soft transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-soft/10 pt-10">
          <p className="text-sm font-semibold text-cream-soft">
            Nossos Programas
          </p>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {schools.map((school) => (
              <div key={school.name} className="text-sm">
                <p className="font-medium text-cream-soft">{school.name}</p>
                <p className="mt-1.5 flex items-start gap-2">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{school.address}</span>
                </p>
                <a
                  href={mapsLinkFor(school.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-salmon hover:text-cream-soft transition-colors"
                >
                  Ver no mapa
                </a>
                <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-cream-soft/10">
                  <iframe
                    src={mapsEmbedFor(school.address)}
                    title={`Mapa - ${school.name}`}
                    width="100%"
                    height="160"
                    loading="lazy"
                    className="block border-0 grayscale-[15%]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream-soft/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Inspirart. Todos os direitos reservados.</p>
          <p>Identidade visual &amp; site conceitual.</p>
        </div>
      </div>
    </footer>
  );
}
