import * as React from "react";

export const CheckCircleS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15.663 3.773A9 9 0 1021 12v-.919a1 1 0 112 0V12A11.002 11.002 0 018.188 22.313a11 11 0 118.289-20.366 1 1 0 11-.814 1.826z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.707 3.293a1 1 0 010 1.414l-10 10.01a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.595l9.293-9.302a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </svg>
);
