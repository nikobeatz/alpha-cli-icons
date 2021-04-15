import * as React from "react";

export const LightningMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 1.333A6.668 6.668 0 001.333 8 6.668 6.668 0 008 14.667 6.668 6.668 0 0014.667 8 6.668 6.668 0 008 1.333zm0 11.998A5.337 5.337 0 012.67 8c0-2.94 2.39-5.33 5.33-5.33 2.939 0 5.33 2.39 5.33 5.33S10.94 13.33 8 13.33zM5.495 9.002L8.5 3.324v3.674h2.004l-2.913 5.678V9.002H5.495z"
      fill="currentColor"
    />
  </svg>
);
export default LightningMarkS;
