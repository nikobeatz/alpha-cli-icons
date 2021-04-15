import * as React from "react";

export const ShareM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.176 5.42a.934.934 0 00-.103 1.196.682.682 0 001.049.09L11.29 4.63v8.768a.735.735 0 101.47 0v-8.81l2.213 2.12a.682.682 0 001.05-.092.934.934 0 00-.104-1.195l-3.357-3.216a.702.702 0 00-.517-.203.703.703 0 00-.512.204L8.176 5.42z"
      fill="currentColor"
    />
    <path
      d="M4.13 12.45a.833.833 0 011.668 0V17a3.333 3.333 0 003.333 3.333h5.735A3.333 3.333 0 0018.199 17v-4.55a.833.833 0 011.667 0V17a5 5 0 01-5 5H9.13a5 5 0 01-5-5v-4.55z"
      fill="currentColor"
    />
  </svg>
);
export default ShareM;
