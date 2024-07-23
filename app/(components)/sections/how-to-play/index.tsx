"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps } from "@/data";
import { fadeInUp, scaleIn } from "@/animations/headline";
import Instructions from "./instruction";
import CarouselSection from "./carousel";
import NavigationButtons from "./navigation";
import BackgroundEffect from "./background";

gsap.registerPlugin(ScrollTrigger);

const HowToPlaySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const instructionsRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const increaseIndex = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const decreaseIndex = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  useEffect(() => {
    const instructions = instructionsRef.current;
    const swiper = swiperRef.current;

    if (instructions) {
      fadeInUp(instructions, true);
    }

    if (swiper) {
      scaleIn(swiper, true);
    }
  }, []);

  return (
    <section className="mb-20 flex relative justify-center max-w-full p-2 hidden md:flex">
      <div className="flex relative z-20 items-start bg-card rounded-xl p-10 justify-between w-full max-w-container gap-5">
        <div className="flex flex-col" ref={instructionsRef}>
          <Instructions currentIndex={currentIndex} />
          <NavigationButtons
            onIncrease={increaseIndex}
            onDecrease={decreaseIndex}
          />
        </div>
        <CarouselSection ref={swiperRef} />
      </div>
      <BackgroundEffect />
    </section>
  );
};

export default HowToPlaySection;
