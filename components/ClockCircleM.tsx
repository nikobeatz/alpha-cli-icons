import * as React from "react";

export const ClockCircleM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.005 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm-1-15v5a3 3 0 001.2 2.4l2.6 1.7 1.2-1.6-2.6-1.7a1 1 0 01-.4-.8V7h-2z"
      fill="currentColor"
    />
  </svg>
);
export default ClockCircleM;
