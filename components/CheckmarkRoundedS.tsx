import * as React from "react";

export const CheckmarkRoundedS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.355 8.007a6.667 6.667 0 1113.334 0 6.667 6.667 0 01-13.334 0zm9.867-1.649a.455.455 0 00-.643-.642L6.961 9.334 5.465 7.837a.455.455 0 00-.643.643l1.818 1.818a.455.455 0 00.643 0l3.94-3.94z"
      fill="currentColor"
    />
  </svg>
);
export default CheckmarkRoundedS;
