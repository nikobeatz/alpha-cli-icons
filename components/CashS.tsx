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
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.184 5.32a1.334 1.334 0 00-.829 1.483v6.004c0 .737.597 1.334 1.334 1.334h10.58c.736 0 1.333-.597 1.333-1.334V6.643c0-.737-.597-1.334-1.333-1.334H2.211l-.027.01zm5.795 6.613a2.208 2.208 0 100-4.416 2.208 2.208 0 000 4.416z"
      fill="currentColor"
    />
    <path
      d="M5.048 4.205h7.688L12.21 2.85a1.333 1.333 0 00-1.726-.759L5.048 4.205z"
      fill="currentColor"
    />
  </svg>
);
export default CashS;
