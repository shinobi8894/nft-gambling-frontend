"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Rewards from "@/components/basic/icons/rewards";
import { scaleIn } from "@/animations/headline";
import HeadlineSection from "./headline";
import StatsSection from "./stats";

export default function HeroSection() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      scaleIn(imageRef.current, false);
    }
  }, [imageRef]);

  return (
    <section className="flex justify-center p-2 mb-20">
      <div className="w-full max-w-container flex items-center justify-between">
        <div className="flex flex-col">
          <HeadlineSection />
          <StatsSection />
        </div>
        <div
          ref={imageRef}
          className="max-w-[740px] min-w-[320px] w-full h-auto hidden md:flex"
        >
          <Image
            src={"https://i.postimg.cc/P5qD0wYn/image-8.png"}
            width={740}
            height={740}
            alt="casino"
          />
        </div>
      </div>
      <div className="bg-primary rounded-full p-5 fixed bottom-[100px] right-[30px] z-50 shadow-2xl shadow-primary">
        <Rewards />
      </div>
    </section>
  );
}

