interface CloseProps {
  onClick?: () => void;
  className?: string;
}

export default function Close({ className, onClick }: CloseProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M1 17L9 9L17 17M17 1L8.99847 9L1 1"
        stroke="#E7A000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
