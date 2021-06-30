import * as React from "react";

export const CheckmarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.688 4.96l-7.74 7.764L1.354 7.08l1.53-1.532 3.932 3.94L13.01 3.28l1.677 1.68z"
      fill="currentColor"
    />
  </svg>
);
export default CheckmarkS;
