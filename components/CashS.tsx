import * as React from "react";

export const CashS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.215 5.255a1.334 1.334 0 00-.828 1.483v6.004c0 .737.597 1.334 1.333 1.334H13.3c.737 0 1.334-.597 1.334-1.334V6.577c0-.736-.597-1.333-1.333-1.333H2.242l-.027.01zm5.795 6.613a2.208 2.208 0 100-4.416 2.208 2.208 0 000 4.416z"
      fill="currentColor"
    />
    <path
      d="M5.08 4.14h7.688l-.527-1.355a1.333 1.333 0 00-1.726-.759L5.08 4.14z"
      fill="currentColor"
    />
  </svg>
);
export default CashS;
