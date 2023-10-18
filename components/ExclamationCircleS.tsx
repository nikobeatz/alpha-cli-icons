import React from "react";

export const ExclamationCircleS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.016 15.668a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zm0-1.11a5.556 5.556 0 100-11.112 5.556 5.556 0 000 11.111z"
      fill="currentColor"
    />
    <path
      d="M7.46 6.224a.556.556 0 011.112 0v2.778a.556.556 0 01-1.111 0V6.224zM7.46 11.224a.556.556 0 011.112 0v.555a.556.556 0 11-1.111 0v-.555z"
      fill="currentColor"
    />
  </svg>
);
export default ExclamationCircleS;
