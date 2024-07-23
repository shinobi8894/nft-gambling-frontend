"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp } from "@/animations/headline";
import BlockchainLogos from "./logos";
import CrossSectionContent from "./content";
import CrossSectionImage from "./image";

gsap.registerPlugin(ScrollTrigger);

export default function CrossSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInUp(contentRef.current, true);
    }
  }, []);

  return (
    <section className="flex justify-end mb-20">
      <div className="flex justify-between flex-col md:flex-row items-center gap-20">
        <div ref={contentRef} className="flex flex-col gap-10 md:flex-row">
          <CrossSectionContent />
          <BlockchainLogos />
        </div>
        <CrossSectionImage />
      </div>
    </section>
  );
}
