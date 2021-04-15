import * as React from "react";

export const CreditCardS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3.019 3h9.962c.93 0 1.686.814 1.686 1.815v1.317H1.333V4.815C1.333 3.815 2.09 3 3.02 3z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.333 11.182V7.628h13.334v3.554c0 1-.756 1.815-1.686 1.815H3.02c-.93 0-1.686-.814-1.686-1.815zm2.083-.21h2.177V9.473H3.416v1.497z"
      fill="currentColor"
    />
  </svg>
);
export default CreditCardS;
