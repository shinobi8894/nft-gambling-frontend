"use client";

import First from "@/components/basic/icons/first";
import Second from "@/components/basic/icons/second";
import Third from "@/components/basic/icons/third";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { fadeInUp } from "@/animations/headline";
import Step from "./step";

gsap.registerPlugin(ScrollTrigger);

const HowToPlayMdSection: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register each step with GSAP ScrollTrigger
    stepsRef.current.forEach((step, index) => {
      if (step) {
        fadeInUp(step, true);
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
