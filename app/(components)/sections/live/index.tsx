"use client";

import Button from "@/components/basic/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface LiveBettingInfoProps {
  title: string;
  description: string;
}

const LiveBettingInfo: React.FC<LiveBettingInfoProps> = ({
  title,
  description,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative flex flex-col items-center md:items-start mb-10 max-w-[520px]"
    >
      <h1 className="z-10 text-white font-bold mb-5 text-3xl text-center md:text-start lg:text-6xl md:text-5xl sm:text-3xl">
        {title}
      </h1>
      <p className="z-10 text-white mb-5 text-center md:text-start">
        {description}
      </p>
      <Button className="z-10">Connect Wallet</Button>
      <div className="absolute right-10 w-full max-w-[250px] h-full max-h-[250px] blur-2xl opacity-30 rounded-full z-0 bg-primary" />
    </div>
  );
};

const LiveSection: React.FC = () => {
  const title = "Live Betting Casinos";
  const description =
    "Challenge your friends or other players in the game of poker, coin flip and rock, paper scissors using top tokens and wins amazing bets.";
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imageRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="flex justify-center p-2 mb-20">
      <div className="w-full max-w-container flex items-center justify-between flex-col md:flex-row">
        <LiveBettingInfo title={title} description={description} />
        <div ref={imageRef} className="max-w-[740px] min-w-[320px] w-full h-auto">
          <Image
            src={"https://i.postimg.cc/LhFSz42N/Image.png"}
            width={740}
            height={740}
            alt="casino"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
