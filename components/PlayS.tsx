import * as React from "react";

export const PlayS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.581 6.995a1.15 1.15 0 010 2.01l-9.869 5.514A1.15 1.15 0 012 13.514V2.486A1.15 1.15 0 013.712 1.48l9.87 5.514z"
      fill="currentColor"
    />
  </svg>
);
export default PlayS;
