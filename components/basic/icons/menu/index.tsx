interface MenuProps {
  onClick?: () => void;
  className?: string;
}

export default function Menu({ className, onClick }: MenuProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M2.0061 2H20.0061M2.0061 8H20.0061M2.0061 14H20.0061"
        stroke="white"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
