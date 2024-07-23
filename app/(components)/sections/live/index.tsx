"use client";

import Button from "@/components/basic/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { scaleIn } from "@/animations/headline";
import LiveBettingInfo from "./information";

gsap.registerPlugin(ScrollTrigger);

const LiveSection: React.FC = () => {
  const title = "Live Betting Casinos";
  const description =
    "Challenge your friends or other players in the game of poker, coin flip and rock, paper scissors using top tokens and wins amazing bets.";
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imageRef.current;

    if (element) {
      scaleIn(element, true);
    }
  }, []);

  return (
    <section className="flex justify-center p-2 mb-20">
      <div className="w-full max-w-container flex items-center justify-between flex-col md:flex-row">
        <LiveBettingInfo title={title} description={description} />
        <div
          ref={imageRef}
          className="max-w-[740px] min-w-[320px] w-full h-auto"
        >
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
