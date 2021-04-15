import * as React from "react";

export const CheckmarkRoudedS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zM11.2 6.352a.455.455 0 00-.643-.643L6.94 9.327 5.443 7.83a.455.455 0 10-.643.643l1.818 1.818a.455.455 0 00.643 0l3.94-3.94z"
      fill="currentColor"
    />
  </svg>
);
export default CheckmarkRoudedS;
