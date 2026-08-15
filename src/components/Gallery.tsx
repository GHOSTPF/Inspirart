"use client";

import { Reveal } from "./Reveal";
import { CircularGallery } from "./ui/circular-gallery-2";
import type { GalleryItem } from "./ui/circular-gallery-2";

// TODO: replace the remaining picsum placeholders with real photos from the ateliês.
const carouselItems: GalleryItem[] = [
  { image: "/brand/galeria_image.jpeg", text: "" },
  { image: "/brand/galeria_image1.jpeg", text: "" },
  { image: "https://picsum.photos/seed/inspirart-3/800/600", text: "" },
  { image: "https://picsum.photos/seed/inspirart-4/800/600", text: "" },
  { image: "https://picsum.photos/seed/inspirart-5/800/600", text: "" },
  { image: "https://picsum.photos/seed/inspirart-6/800/600", text: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
            Identidade &amp; galeria
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Cada padrão conta uma história.
          </h2>
          <p className="mt-4 text-ink-soft">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, um
            recorte da nossa identidade visual e dos trabalhos criados nos
            ateliês.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-6">
          {tiles.map((t, i) => (
            <Reveal
              key={i}
              delay={0.05 * i}
              className={`${t.span ?? ""}`}
            >
              {t.pattern ? (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="h-full min-h-40 overflow-hidden rounded-3xl ring-1 ring-ink/10"
                  style={{
                    backgroundImage: "url(/brand/pattern-tile.webp)",
                    backgroundSize: "260px",
                    backgroundRepeat: "repeat",
                  }}
                />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className={`flex h-full min-h-40 items-center justify-center overflow-hidden rounded-3xl ${t.tone}`}
                >
                  <motion.div
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{
                      duration: 8 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-16 sm:w-24"
                  >
                    <Rosette fill="currentColor" className={t.fill} />
                  </motion.div>
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 sm:mt-20">
          <div className="relative h-[420px]    ring-ink/10 sm:h-[520px]">
            <CircularGallery items={carouselItems} bend={2} borderRadius={0.06} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
