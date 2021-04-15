import * as React from "react";

export const ArrowDirectionS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.333 14.682V4.455h2.36v6.056l9.177-9.178 1.796 1.796-9.192 9.193h6.873v2.36H1.333z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDirectionS;
