import * as React from "react";

export const CloseMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.215 8L5.226 6.012l.786-.786L8 7.214l1.988-1.988.786.786L8.786 8l1.988 1.988-.786.786L8 8.786l-1.988 1.988-.786-.786L7.215 8z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.333a6.667 6.667 0 100 13.334A6.667 6.667 0 008 1.333zM1.89 8A6.111 6.111 0 1014.11 8 6.111 6.111 0 001.89 8z"
      fill="currentColor"
    />
  </svg>
);
export default CloseMarkS;
