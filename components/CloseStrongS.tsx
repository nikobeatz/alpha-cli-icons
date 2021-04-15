import * as React from "react";

export const CloseStrongS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 10.4l3.6 3.6 2.4-2.4L10.4 8 14 4.4 11.6 2 8 5.6 4.4 2 2 4.4 5.6 8 2 11.6 4.4 14 8 10.4z"
      fill="currentColor"
    />
  </svg>
);
export default CloseStrongS;
