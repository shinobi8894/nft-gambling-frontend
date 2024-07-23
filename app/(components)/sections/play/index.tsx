"use client";

import Button from "@/components/basic/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    );
  }, []);
  return (
    <div
      ref={imageRef}
      className="flex gap-2 min-w-[0px] order-2 md:order-1 lg:min-w-[580px]"
    >
      <div className="flex">
        <Image
          src="https://i.postimg.cc/PxtQRtGF/Frame-38.png"
          alt="poker"
          width={288}
          height={288}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Image
          src="https://i.postimg.cc/mZ1yppK4/coin-flip.png"
          alt="coin flip"
          width={288}
          height={288}
        />
        <Image
          src="https://i.postimg.cc/B62JY1b2/coin-flip.png"
          alt="coin flip"
          width={288}
          height={288}
        />
      </div>
    </div>
  );
};

const PlaySection = () => {
  useEffect(() => {
    const section = gsap.utils.selector(".play-section");

    gsap.fromTo(
      section(".play-content"),
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: section(".play-content"),
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="play-section flex justify-center mb-20 p-2">
      <div className="flex w-full max-w-container items-center justify-between gap-3 flex-col md:flex-row">
        <ImageGallery />
        <div className="play-content flex flex-col p-2 items-center md:items-start text-white max-w-[640px] order-1 mb-10 md:mb-0 md:order-2">
          <h1 className="font-bold mb-5 text-3xl text-center md:text-left lg:text-6xl md:text-5xl sm:text-3xl">
            Play Top Casino Games
          </h1>
          <p className="mb-5 text-center md:text-left">
            Master the art of poker and the excitement of coinflip with $WETH,
            the ultimate token for enthusiasts seeking a superior gaming
            experience.
          </p>
          <Button>Play Now</Button>
        </div>
      </div>
    </section>
  );
};

export default PlaySection;
