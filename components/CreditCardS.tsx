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
    <path d="M0 0h17v17H0z" />
    <path
      d="M3.025 3.005h9.963c.93 0 1.685.814 1.685 1.815v1.317H1.34V4.82c0-1 .756-1.815 1.685-1.815z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.34 11.186V7.633h13.333v3.553c0 1.002-.756 1.816-1.685 1.816H3.025c-.93 0-1.685-.814-1.685-1.816zm2.083-.21H5.6V9.479H3.423v1.497z"
      fill="currentColor"
    />
  </svg>
);
export default CreditCardS;
