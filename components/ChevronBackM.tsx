import React from "react";

export const ChevronBackM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      d="M10.355 12l5.5-5.5-1.5-1.5-7 7 7 7 1.5-1.5-5.5-5.5z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronBackM;
