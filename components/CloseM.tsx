import * as React from "react";

export const CloseM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      d="M4.015 2L2.001 4.014 9.987 12 2 19.986 4.015 22l7.986-7.986L19.987 22 22 19.986 14.015 12l7.986-7.986L19.987 2 12 9.986 4.015 2z"
      fill="currentColor"
    />
  </svg>
);
export default CloseM;
