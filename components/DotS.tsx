import React from "react";

export const DotS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path d="M11.01 8a3 3 0 11-6 0 3 3 0 016 0z" fill="currentColor" />
  </svg>
);
export default DotS;
