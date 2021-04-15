import * as React from "react";

export const MinusS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.682 7.317H1.903v1.366h12.192V7.317H8.682z"
      fill="currentColor"
    />
  </svg>
);
export default MinusS;
