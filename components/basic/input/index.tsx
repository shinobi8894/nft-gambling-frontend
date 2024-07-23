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

export default TextInput;
