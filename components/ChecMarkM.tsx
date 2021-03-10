import * as React from "react";

export const ChecMarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M22 7.52L10.389 19.167 2 10.699 4.294 8.4l5.899 5.91L19.485 5 22 7.52z"
      fill="currentColor"
    />
  </svg>
);
export default ChecMarkM;
