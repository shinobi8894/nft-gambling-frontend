"use client";

import { steps } from "@/data";
import InstructionItem from "./instruction-item";

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

export default Instructions;
