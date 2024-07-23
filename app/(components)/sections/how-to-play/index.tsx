"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Left from "@/components/basic/icons/left";
import Right from "@/components/basic/icons/right";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images, steps } from "@/data";
import { fadeInUp, scaleIn } from "@/animations/headline";

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

interface InstructionsProps {
  currentIndex: number;
}

const Instructions: React.FC<InstructionsProps> = ({ currentIndex }) => {
  return (
    <div className="flex flex-col max-w-[620px] min-w-[320px]">
      <h1 className="font-bold text-primary text-3xl mb-10">How to play</h1>
      {steps.map((step, index) => (
        <InstructionItem
          key={index}
          isActive={currentIndex === index}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
};

interface InstructionItemProps {
  isActive: boolean;
  icon: JSX.Element;
  title: string;
  description: string;
}

const InstructionItem: React.FC<InstructionItemProps> = ({
  isActive,
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-center gap-10 mb-5">
      <div className="min-w-[50px]">{icon}</div>
      <div className={isActive ? "text-white" : "text-textOpacity"}>
        <h2 className="font-semibold text-xl mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface NavigationButtonsProps {
  onIncrease: () => void;
  onDecrease: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex gap-5">
      <div
        className="rounded-md bg-main pt-2 pb-2 pl-3 pr-3 arrow-left cursor-pointer"
        onClick={onDecrease}
      >
        <Left />
      </div>
      <div
        className="rounded-md bg-main pt-2 pb-2 pl-3 pr-3 arrow-right cursor-pointer"
        onClick={onIncrease}
      >
        <Right />
      </div>
    </div>
  );
};

const CarouselSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="max-w-[300px] lg-mid:max-w-[560px]" ref={ref}>
      <Swiper
        modules={[Navigation]}
        loop
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        centeredSlides={true}
        spaceBetween={15}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="max-w-[560px] w-full h-auto">
            <Image
              src={src}
              width={560}
              height={520}
              alt={`gamblify-${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

CarouselSection.displayName = "CarouselSection";

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute -left-[100px] -top-[100px] w-full max-w-[550px] h-full max-h-[350px] blur-2xl opacity-30 rounded-full z-0 bg-primary" />
  );
};

export default HowToPlaySection;
