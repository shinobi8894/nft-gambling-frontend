interface FirstProps {
    className? : string
}

export default function First({ className }:FirstProps) {
  return (
    <svg
      width="38"
      height="73"
      viewBox="0 0 38 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.1 64V64.5H13.6H28.18H28.68V64V1V0.5H28.18H1H0.5V1V12.7V13.2H1H13.1V64Z"
        stroke="#E7A000"
      />
      <path d="M22.6 73V15.4L28.9 21.7H10V10H37.18V73H22.6Z" fill="white" />
    </svg>
  );
}
