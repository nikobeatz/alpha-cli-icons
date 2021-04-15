import * as React from "react";

export const CloseS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.676 1.333L1.333 2.676 6.657 8l-5.324 5.324 1.343 1.343L8 9.343l5.324 5.324 1.343-1.343L9.343 8l5.324-5.324-1.343-1.343L8 6.657 2.676 1.333z"
      fill="currentColor"
    />
  </svg>
);
export default CloseS;
