import * as React from "react";

export const ExclamationMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.493 14.667a1 1 0 001-1v-.963a1 1 0 00-1-1H7.53a1 1 0 00-1 1v.963a1 1 0 001 1h.963zm0-5.186a1 1 0 001-1V2.333a1 1 0 00-1-1H7.53a1 1 0 00-1 1v6.148a1 1 0 001 1h.963z"
      fill="currentColor"
    />
  </svg>
);
export default ExclamationMarkS;
