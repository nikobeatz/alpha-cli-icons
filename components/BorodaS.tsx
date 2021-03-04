import * as React from "react";

export const BorodaS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.776 17.758a1 1 0 101.762.946l5.545-10.335 2.19 7.263a1 1 0 001.915-.578L16.3 5.481v-.004a.998.998 0 00-1.246-.665L5.48 7.7a1 1 0 00.578 1.914l7.262-2.19-5.544 10.334z"
      fill="currentColor"
    />
  </svg>
);
