import * as React from "react";

export const LetterS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      d="M14.678 5.88v5.089c0 1.083-.904 1.968-2.044 2.028l-.123.003h-9c-1.155 0-2.1-.848-2.163-1.916l-.003-.115V5.88l6.434 3.16a.53.53 0 00.464 0l6.435-3.16zM3.511 3h9c1.124 0 2.047.801 2.156 1.827L8.011 8.096 1.356 4.827c.105-.988.965-1.767 2.031-1.824L3.511 3z"
      fill="currentColor"
    />
  </svg>
);
export default LetterS;
