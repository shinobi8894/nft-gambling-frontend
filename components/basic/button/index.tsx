import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  buttonRef ? : any
}

export default function Button({ children, className, buttonRef }: ButtonProps) {
  return (
    <button
      className={`text-white transform -skew-x-6 p-2 rounded-md border border-primary ${className}`}
      ref={buttonRef}
    >
      <div className="bg-primary transform pt-2 pb-2 pl-4 pr-4 rounded-md">
        {children}
      </div>
    </button>
  );
}
