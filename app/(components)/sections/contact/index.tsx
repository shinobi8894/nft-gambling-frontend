"use client";

import { fadeInUp } from "@/animations/headline";
import Email from "@/components/basic/icons/email";
import Telegram from "@/components/basic/icons/telegram";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ContactHeaderProps {}

const ContactHeader: React.FC<ContactHeaderProps> = () => (
  <div className="flex max-w-[420px] flex-col p-2 items-center md:items-start text-white">
    <h1 className="font-bold mb-5 text-primary text-3xl text-center md:text-left lg:text-6xl md:text-5xl sm:text-3xl">
      Send Us A Message
    </h1>
    <p className="mb-5 text-center md:text-left">
      Do you have an enquiry? Send us a message today, our 24/7 customer service
      team are available to respond.
    </p>
  </div>
);

interface TextInputProps {
  placeholder: string;
  type?: string;
  icon?: React.ElementType;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  type = "text",
  icon: Icon,
}) => (
  <div className="flex bg-main items-center w-full pr-5 gap-2 border border-border pl-5 rounded-lg">
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none border-none w-full text-white bg-main h-input"
    />
    {Icon && <Icon />}
  </div>
);

const ContactForm: React.FC = () => (
  <form className="w-full max-w-[620px]">
    <div className="flex gap-2 mb-2 w-full">
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" icon={Email} />
    </div>
    <textarea
      rows={10}
      placeholder="Message"
      className="border border-border mb-5 outline-none bg-main w-full rounded-md text-white pl-2 pt-2"
    />
    <button className="h-input w-full md:w-fit rounded-md flex gap-2 items-center bg-primary text-white pl-5 pr-5">
      <span>Send Message</span>
      <Telegram />
    </button>
  </form>
);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (element) {
      fadeInUp(element, true);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-center mb-20 pt-10 pl-2 pr-2 pb-10 bg-card"
    >
      <div className="flex w-full max-w-container justify-between flex-col items-center md:items-start md:flex-row">
        <ContactHeader />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
