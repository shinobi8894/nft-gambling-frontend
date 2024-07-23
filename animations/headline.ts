import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (
  element: HTMLElement,
  isScroll: boolean,
  delay?: number
) => {
  const fromOptions = {
    opacity: 0,
    y: 50,
  };

  const toOptions = {
    opacity: 1,
    y: 0,
    delay: delay,
    duration: 1,
  };

  if (isScroll) {
    const scrollToOptions = {
      ...toOptions,
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "top center",
        toggleActions: "play none none reverse",
      },
    };
    return gsap.fromTo(element, fromOptions, scrollToOptions);
  }

  return gsap.fromTo(element, fromOptions, toOptions);
};

export const scaleIn = (element: HTMLElement, isScroll: boolean) => {
  const fromOptions = {
    opacity: 0,
    scale: 0.9,
  };

  const toOptions = {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power2.inOut",
  };

  if (isScroll) {
    const scrollToOptions = {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    };
    return gsap.fromTo(element, fromOptions, scrollToOptions);
  }

  return gsap.fromTo(element, fromOptions, toOptions);
};
