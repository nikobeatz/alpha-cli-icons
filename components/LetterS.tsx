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
    <path d="M0 0h16v16H0z" />
    <path
      d="M14.667 6.213v5.09c0 1.082-.905 1.967-2.044 2.027l-.123.003h-9c-1.155 0-2.1-.847-2.163-1.916l-.004-.115V6.213l6.435 3.16a.53.53 0 00.464 0l6.435-3.16zM3.5 3.333h9c1.123 0 2.047.802 2.156 1.828L8 8.429 1.344 5.161c.105-.988.966-1.768 2.032-1.824l.124-.004z"
      fill="currentColor"
    />
  </svg>
);
export default LetterS;
