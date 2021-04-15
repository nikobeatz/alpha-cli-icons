import * as React from "react";

export const BellS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.001 15.667c.87 0 1.582-.708 1.582-1.573H6.419c0 .865.704 1.573 1.582 1.573zm4.746-4.718V7.017c0-2.414-1.297-4.435-3.56-4.97v-.534c0-.653-.53-1.18-1.186-1.18-.657 0-1.187.527-1.187 1.18v.534c-2.27.535-3.56 2.548-3.56 4.97v3.932l-1.02 1.014a.786.786 0 00.554 1.345h10.418c.704 0 1.06-.85.561-1.345l-1.02-1.014z"
      fill="currentColor"
    />
  </svg>
);
export default BellS;
