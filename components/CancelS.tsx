import React from "react";

export const CancelS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.683 9.002a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0zm-1.481 0a5.185 5.185 0 01-8.058 4.317l7.19-7.19c.548.822.868 1.81.868 2.873zm-1.858-3.978a5.185 5.185 0 00-7.304 7.304l7.304-7.304z"
      fill="currentColor"
    />
  </svg>
);
export default CancelS;
