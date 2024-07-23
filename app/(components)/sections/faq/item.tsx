import { AccordionItem } from "@szhsin/react-accordion";

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

export default FAQItem;