import * as React from "react";

export const CrounOutlineS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.953 3.419a.952.952 0 11-1.905 0 .952.952 0 011.905 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.965 9.331L1.968 6.334v5.637c0 1.052.853 1.905 1.905 1.905h8.254a1.905 1.905 0 001.905-1.905V6.335L11.036 9.33 8 6.296 4.965 9.33zm7.797 2.64V9.393l-1.726 1.726L8 8.084l-3.035 3.035-1.727-1.727v2.579c0 .35.285.635.635.635h8.254c.35 0 .635-.284.635-.635z"
      fill="currentColor"
    />
    <path
      d="M2.286 5.641a.952.952 0 100-1.904.952.952 0 000 1.904zM14.667 4.689a.952.952 0 11-1.905 0 .952.952 0 011.905 0z"
      fill="currentColor"
    />
  </svg>
);
export default CrounOutlineS;
