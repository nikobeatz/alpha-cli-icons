import * as React from "react";

export const CloseMarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.822 12L7.84 9.018 9.02 7.839 12 10.821l2.982-2.982 1.179 1.179L13.18 12l2.982 2.982-1.179 1.179-2.982-2.982-2.982 2.982-1.179-1.179L10.822 12z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.001 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM2.834 12a9.167 9.167 0 1018.334 0 9.167 9.167 0 00-18.334 0z"
      fill="currentColor"
    />
  </svg>
);
export default CloseMarkM;
