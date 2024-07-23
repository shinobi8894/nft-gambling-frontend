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

export default InstructionItem;
