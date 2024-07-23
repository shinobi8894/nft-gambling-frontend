"use client";

import { casinosData } from "@/data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp } from "@/animations/headline";
import CasinoCard from "./card";

gsap.registerPlugin(ScrollTrigger);

export default function CasinosSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;
    const headingElement = headingRef.current;

    if (headingElement) {
      fadeInUp(headingElement, true);
    }

    if (element) {
      fadeInUp(element, true);
    }
  }, []);

  return (
    <section className="relative flex justify-center mb-20 p-2">
      <div className="flex relative z-20 flex-col w-full max-w-container items-center">
        <div className="flex flex-col p-2 items-center text-white max-w-[640px]">
          <h1
            ref={headingRef}
            className="font-bold mb-5 text-3xl text-center lg:text-6xl md:text-5xl sm:text-3xl"
          >
            Popular Casinos
          </h1>
          <p ref={contentRef} className="mb-5 text-center">
            Master the art of poker and the excitement of coinflip with the
            ultimate tokens for enthusiasts seeking a superior gaming
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 w-full gap-5 lg:gap-10 md:gap-5 md:grid-cols-3 sm:grid-cols-2">
          {casinosData.map((casino, index) => (
            <CasinoCard key={index} {...casino} />
          ))}
        </div>
      </div>
      <div className="absolute -top-[50] w-full max-w-[650px] h-full max-h-[650px] blur-2xl opacity-30 rounded-full z-0 bg-primary" />
    </section>
  );
}
