import React from "react";

export const ClockS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.603 2.037a2.381 2.381 0 013.367 3.367.476.476 0 01-.673 0L10.603 2.71a.476.476 0 010-.673zM5.398 2.037a2.381 2.381 0 00-3.367 3.367.476.476 0 00.673 0L5.398 2.71a.476.476 0 000-.673z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.783 12.097a5.238 5.238 0 10-7.564 0l-1.361 1.814a.476.476 0 10.762.572l1.319-1.76a5.2 5.2 0 006.124 0l1.319 1.76a.476.476 0 10.762-.572l-1.361-1.814zM8.477 8.483a.476.476 0 01-.095.285l-1.429 1.905a.476.476 0 11-.762-.571l1.334-1.778V5.625a.476.476 0 11.952 0v2.858z"
      fill="currentColor"
    />
  </svg>
);
export default ClockS;
