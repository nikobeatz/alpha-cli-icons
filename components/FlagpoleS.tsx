import React from "react";

export const FlagpoleS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      d="M3.205 14V9.8m0 0s.6-.6 2.4-.6c1.8 0 3 1.2 4.8 1.2 1.8 0 2.4-.6 2.4-.6V2.6s-.6.6-2.4.6c-1.8 0-3-1.2-4.8-1.2-1.8 0-2.4.6-2.4.6v7.2z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default FlagpoleS;
