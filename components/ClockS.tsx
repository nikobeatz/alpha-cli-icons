import * as React from "react";

export const ClockS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.588 2.03a2.38 2.38 0 013.367 3.367.476.476 0 01-.673 0l-2.694-2.693a.476.476 0 010-.674zM5.383 2.03a2.381 2.381 0 00-3.367 3.367.476.476 0 00.673 0l2.694-2.693a.476.476 0 000-.674z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.768 12.09a5.238 5.238 0 10-7.564 0l-1.361 1.815a.476.476 0 00.762.571l1.319-1.759a5.2 5.2 0 006.124 0l1.319 1.76a.476.476 0 00.762-.572l-1.361-1.815zM8.462 8.476a.476.476 0 01-.095.286l-1.429 1.904a.476.476 0 11-.762-.57L7.51 8.316V5.62a.476.476 0 01.952 0v2.857z"
      fill="currentColor"
    />
  </svg>
);
export default ClockS;
