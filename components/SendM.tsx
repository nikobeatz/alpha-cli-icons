import * as React from "react";

export const SendM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.068 13.115c1.02-.387 1.02-1.831 0-2.219L4 3.042v5.293a2 2 0 001.252 1.855l4.498 1.816-4.499 1.816a2 2 0 00-1.25 1.854L4 20.97l18.068-7.854z"
      fill="currentColor"
    />
  </svg>
);
export default SendM;
