"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Ateliês", href: "#ateliers" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Nav({ visible }: { visible: boolean }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-cream-soft/80 border-b border-ink/5"
    >
      <a href="#top" className="flex items-center gap-2.5">
        <Image
          src="/brand/logo_mark_preto.png"
          alt=""
          width={352}
          height={240}
          className="h-7 w-auto"
        />
        <Image
          src="/brand/logo_wordmark_preto.png"
          alt="Inspirart"
          width={456}
          height={76}
          className="h-5 w-auto"
        />
      </a>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-coral-dark transition-colors">
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href={whatsappLink("Olá! Quero fazer minha matrícula na Inspirart.")}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-cream-soft shadow-sm hover:bg-coral-dark transition-colors"
      >
        Matricule-se
      </a>
    </motion.header>
  );
}
