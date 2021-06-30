import * as React from "react";

export const CheckmarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M22.005 7.44L10.393 19.087l-8.388-8.468L4.299 8.32l5.899 5.91 9.292-9.31 2.515 2.52z"
      fill="currentColor"
    />
  </svg>
);
export default CheckmarkM;
