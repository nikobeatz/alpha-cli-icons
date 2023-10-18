import React from "react";

export const ChevronDownS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.008 9.266L3.294 4.552 2.008 5.838l6 6 6-6-1.286-1.286-4.714 4.714z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronDownS;
