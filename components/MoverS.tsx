import React from "react";

export const MoverS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path stroke="currentColor" d="M2.01 3.5h12M2.01 7.5h12M2.01 11.5h12" />
  </svg>
);
export default MoverS;
