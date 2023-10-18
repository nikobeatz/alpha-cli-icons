import React from "react";

export const CheckmarkOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.001 12c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-11.5 4l6.5-6.5-1.5-1.5-5 5-2-2-1.5 1.5 3.5 3.5z"
      fill="currentColor"
    />
  </svg>
);
export default CheckmarkOn;
