import React from "react";

export const ChecMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.667 5.014l-7.741 7.764-5.592-5.645L2.863 5.6l3.932 3.94 6.195-6.207 1.677 1.68z"
      fill="currentColor"
    />
  </svg>
);
export default ChecMarkS;
