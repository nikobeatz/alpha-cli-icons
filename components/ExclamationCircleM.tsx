import React from "react";

export const ExclamationCircleM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.005 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-1.667a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
      fill="currentColor"
    />
    <path
      d="M11.171 7.833a.833.833 0 011.667 0V12a.833.833 0 01-1.666 0V7.833zM11.171 15.333a.833.833 0 011.667 0v.834a.833.833 0 01-1.666 0v-.834z"
      fill="currentColor"
    />
  </svg>
);
export default ExclamationCircleM;
