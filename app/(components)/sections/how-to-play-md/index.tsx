"use client"

import First from "@/components/basic/icons/first";
import Second from "@/components/basic/icons/second";
import Third from "@/components/basic/icons/third";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface StepProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  ref:any
}

const Step: React.FC<StepProps> = ({ Icon, title, description, ref }) => (
  <div className="flex flex-col mb-5" ref={ref}>
    <div className="flex items-start gap-5 mb-5">
      <div className="min-w-[25px]">
        <Icon className="w-full h-auto" />
      </div>
      <div className="text-white">
        <h2 className="font-semibold text-base mb-2">{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
    <Image
      src={"https://i.postimg.cc/Y9qNW5Gc/Image.png"}
      width={560}
      height={520}
      alt="gamblify"
      className="w-full h-auto"
    />
  </div>
);

const HowToPlayMdSection: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register each step with GSAP ScrollTrigger
    stepsRef.current.forEach((step, index) => {
      if (step) {
        gsap.fromTo(
          step,
          { opacity: 0, y: 50 }, // Start state
          {
            opacity: 1,
            y: 0, // End state
            duration: 0.5,
            delay: index * 0.1, // Stagger effect
            scrollTrigger: {
              trigger: step,
              start: "top 80%", // Trigger when the top of the step is 80% from the top of the viewport
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  // Function to set the ref for each Step item
  const setStepRef = (el: HTMLDivElement | null) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  return (
    <section className="p-2 mb-20 flex md:hidden">
      <div className="bg-card rounded-xl p-5">
        <h1 className="font-bold text-primary text-3xl mb-10">How to play</h1>
        <div ref={setStepRef}>
          <Step
            Icon={First}
            title="Connect Wallet"
            description="Connect your crypto wallet to the Gambly platform for seamless deposits and withdrawal."
            ref={setStepRef}
          />
        </div>
        <div ref={setStepRef}>
          <Step
            Icon={Second}
            title="Play with any ERC20 Token"
            description="Use any ERC20 token for exciting PVP games. Your digital assets, whether mainstream or niche, are your ticket to our ultimate online gaming freedom."
            ref={setStepRef}
          />
        </div>
        <div ref={setStepRef}>
          <Step
            Icon={Third}
            title="Connect Wallet"
            description="Connect your crypto wallet to the Gambly platform for seamless deposits and withdrawal."
            ref={setStepRef}
          />
        </div>
      </div>
    </section>
  );
};

export default HowToPlayMdSection;
