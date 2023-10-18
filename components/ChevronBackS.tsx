import React from "react";

export const ChevronBackS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.741 8l4.715-4.714L10.17 2l-6 6 6 6 1.286-1.286L6.74 8z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronBackS;
