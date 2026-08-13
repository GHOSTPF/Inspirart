"use client";

import { useState } from "react";
import { Intro } from "./Intro";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { PatternMarquee } from "./PatternMarquee";
import { About } from "./About";
import { Programs } from "./Programs";
import { Gallery } from "./Gallery";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

export function SiteExperience() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <Intro onDone={() => setRevealed(true)} />
      <Nav visible={revealed} />
      <main>
        <Hero revealed={revealed} />
        <PatternMarquee />
        <About />
        <Programs />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
