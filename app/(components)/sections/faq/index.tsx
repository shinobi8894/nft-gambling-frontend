"use client";

import { faqData } from "@/data";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FAQHeader: React.FC = () => (
  <div className="flex flex-col p-2 items-center md:items-start text-white max-w-[640px]">
    <h1 className="faq-header font-bold mb-5 text-3xl text-center md:text-left lg:text-6xl md:text-5xl sm:text-3xl">
      FAQ
    </h1>
    <p className="mb-5 text-center md:text-left">Got some questions?</p>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <AccordionItem
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between w-full">
        <h3 className="text-xl font-bold text-left">{question}</h3>
        <div className="text-xl text-primary font-bold">
          {isEnter ? "-" : "+"}
        </div>
      </div>
    )}
    contentProps={{
      className: "bg-card transition-height duration-200 ease-out",
    }}
    buttonProps={{
      className: "w-full",
    }}
    className={"bg-card p-4 rounded-md w-full faq-item"}
  >
    {answer}
  </AccordionItem>
);

const FAQSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate the header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate each FAQ item
    gsap.fromTo(
      itemRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="text-white flex justify-center mb-20 p-2">
      <div className="w-full max-w-container flex justify-between flex-col md:flex-row">
        <div ref={headerRef}>
          <FAQHeader />
        </div>
        <Accordion
          className="flex flex-col gap-5 w-full max-w-[850px]"
          transition
          allowMultiple
          ref={itemRef}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
