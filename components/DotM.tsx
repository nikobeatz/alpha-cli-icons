import * as React from "react";

export const DotM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path d="M17.005 12a5 5 0 11-10 0 5 5 0 0110 0z" fill="currentColor" />
  </svg>
);
export default DotM;
