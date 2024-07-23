"use client";

import Button from "@/components/basic/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { stats } from "@/data";
import Rewards from "@/components/basic/icons/rewards";

export default function HeroSection() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1.5, // adjust the delay to your liking
        ease: "power2.inOut",
      }
    );
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
const HeadlineSection = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tagRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.35,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.05,
        ease: "power2.inOut",
      }
    );
  }, [headingRef, contentRef, buttonRef, tagRef]);

  return (
    <div className="relative flex flex-col items-start mb-10 max-w-[590px]">
      <div
        ref={tagRef}
        className="z-10 text-primary bg-primaryTag border p-2 rounded-lg border-primary mb-5"
      >
        Welcome to Gambly
      </div>
      <h1
        ref={headingRef}
        className="z-10 text-white font-bold mb-5 text-3xl lg:text-6xl md:text-5xl sm:text-3xl"
      >
        Find and Join Your Community 🚀Personal Casino
      </h1>
      <p ref={contentRef} className="z-10 text-white mb-5">
        Gambly introduces a pioneering cross-chain casino platform, the first of
        its kind, where you can enjoy gaming with any ERC20 token. Discover the
        casino tailored for your community and embark on your gaming journey
        today.
      </p>
      <Button buttonRef={buttonRef} className="z-10">
        Browse Casinos
      </Button>
      <div className="absolute right-10 w-full max-w-[250px] h-full max-h-[250px] blur-2xl opacity-30 rounded-full z-0 bg-primary" />
    </div>
  );
};
const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-[30rem]">
      {stats.map((stat, index) => (
        <StatsCard item={stat} index={index} />
      ))}
    </div>
  );
};

interface StatsCardProps {
  index: number;
  item: any;
}
const StatsCard = ({ index, item }: StatsCardProps) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2 + 1.05, // stagger the animation
        ease: "power2.inOut",
      }
    );
  });
  return (
    <div key={index} ref={ref} className="flex gap-3 items-center">
      {item.icon}
      <div className="flex flex-col text-white">
        <span className="font-semibold text-xl">{item.value}</span>
        <span>{item.label}</span>
      </div>
    </div>
  );
};
