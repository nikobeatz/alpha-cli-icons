import * as React from "react";

export const ChevronUpS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.008 6.734l4.714 4.714 1.286-1.286-6-6-6 6 1.286 1.286 4.714-4.714z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronUpS;
