import React from "react";

export const ExclamationRoundS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334zm0-1.111A5.556 5.556 0 108 2.444a5.556 5.556 0 000 11.112z"
      fill="currentColor"
    />
    <path
      d="M7.445 5.222a.556.556 0 111.11 0V8a.556.556 0 01-1.11 0V5.222zM7.445 10.222a.556.556 0 011.11 0v.556a.556.556 0 01-1.11 0v-.556z"
      fill="currentColor"
    />
  </svg>
);
export default ExclamationRoundS;
