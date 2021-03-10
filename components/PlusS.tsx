import * as React from "react";

export const PlusS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.655 2.155h-1.31v5.19h-5.19v1.31h5.19v5.19h1.31v-5.19h5.19v-1.31h-5.19v-5.19z"
      fill="currentColor"
    />
  </svg>
);
export default PlusS;
