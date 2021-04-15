import * as React from "react";

export const CancelS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.482 0a5.185 5.185 0 01-8.058 4.317l7.19-7.19c.548.822.868 1.81.868 2.873zm-1.858-3.977a5.185 5.185 0 00-7.304 7.304l7.304-7.304z"
      fill="currentColor"
    />
  </svg>
);
export default CancelS;
