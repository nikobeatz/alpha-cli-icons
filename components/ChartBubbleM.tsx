import * as React from "react";

export const ChartBubbleM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3a5.51 5.51 0 00-5.5 5.5c0 3.03 2.47 5.5 5.5 5.5s5.5-2.47 5.5-5.5S19.03 3 16 3zM2.5 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm2 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10.01 1c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm-1 3c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM12.5 8.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5S17.93 5 16 5s-3.5 1.57-3.5 3.5z"
      fill="currentColor"
    />
  </svg>
);
export default ChartBubbleM;
