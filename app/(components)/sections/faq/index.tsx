"use client";

import { fadeInUp } from "@/animations/headline";
import { faqData } from "@/data";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FAQHeader from "./header";
import FAQItem from "./item";

gsap.registerPlugin(ScrollTrigger);

const FAQSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      fadeInUp(headerRef.current, true);
    }

    if (itemRef.current) {
      fadeInUp(itemRef.current, true);
    }
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
