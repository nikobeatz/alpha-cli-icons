import React from "react";

export const CloseM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.02 2L2.004 4.014 9.99 12l-7.986 7.986L4.019 22l7.986-7.986L19.99 22l2.014-2.014L14.019 12l7.986-7.986L19.99 2l-7.986 7.986L4.019 2z"
      fill="currentColor"
    />
  </svg>
);
export default CloseM;
