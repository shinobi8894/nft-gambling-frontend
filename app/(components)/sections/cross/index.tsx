"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/basic/button";
import { logos } from "@/data";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp, scaleIn } from "@/animations/headline";

gsap.registerPlugin(ScrollTrigger);

const BlockchainLogos = () => {
  return (
    <div className="flex flex-row justify-between md:flex-col">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          width={60}
          height={60}
          alt={logo.alt}
          className="min-w-[60px]"
        />
      ))}
    </div>
  );
};

const CrossSectionContent = () => {
  return (
    <div className="flex flex-col p-2 items-center md:items-start text-white max-w-[640px]">
      <h1 className="font-bold mb-5 text-3xl text-center md:text-left lg:text-6xl md:text-5xl sm:text-3xl">
        Cross-Chain Compatibility Like Never Before
      </h1>
      <p className="mb-5 text-center md:text-left">
        Gambly is available on Multiple blockchains, allowing you to play with
        any ERC20 token. Our platform is the first of its kind, offering a
        seamless gaming experience with any token of your choice.
      </p>
      <Button>Connect Wallet</Button>
    </div>
  );
};

const CrossSectionImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      scaleIn(imageRef.current, true);
    }
  }, []);

  return (
    <div ref={imageRef} className="relative">
      <div className="absolute hidden md:flex left-0 w-full h-full max-w-[200px] bg-gradient-to-r from-[#111318] to-[rgba(17, 19, 24, 0)]" />
      <div className="absolute flex md:hidden top-0 w-full h-full max-h-[100px] bg-gradient-to-b from-[#111318] to-[rgba(17, 19, 24, 0)]" />
      <Image
        src={"https://i.postimg.cc/7YT4S1LB/Rectangle-59.png"}
        width={800}
        height={650}
        alt="casino"
      />
    </div>
  );
};

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
