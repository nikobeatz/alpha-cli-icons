import * as React from "react";

export const ArrowDownS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.707 6.293a1 1 0 00-1.414 1.414L14.586 16H7a1 1 0 100 2h10.003a.996.996 0 00.71-.3.997.997 0 00.287-.697V7a1 1 0 10-2 0v7.586L7.707 6.293z"
      fill="currentColor"
    />
  </svg>
);
