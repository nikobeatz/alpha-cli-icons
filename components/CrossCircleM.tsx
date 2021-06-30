import * as React from "react";

export const CrossCircleM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M22.005 12c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-7.6 4l-2.4-2.4-2.4 2.4-1.6-1.6 2.4-2.4-2.4-2.4 1.6-1.6 2.4 2.4 2.4-2.4 1.6 1.6-2.4 2.4 2.4 2.4-1.6 1.6z"
      fill="currentColor"
    />
  </svg>
);
export default CrossCircleM;
