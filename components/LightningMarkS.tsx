import React from "react";

export const LightningMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.022 1.34a6.668 6.668 0 00-6.667 6.667 6.668 6.668 0 006.667 6.666 6.668 6.668 0 006.666-6.666A6.668 6.668 0 008.022 1.34zm0 11.997a5.337 5.337 0 01-5.331-5.33c0-2.94 2.391-5.331 5.33-5.331 2.94 0 5.331 2.391 5.331 5.33 0 2.94-2.391 5.331-5.33 5.331zM5.516 9.01L8.523 3.33v3.674h2.004l-2.913 5.678V9.009H5.516z"
      fill="currentColor"
    />
  </svg>
);
export default LightningMarkS;
