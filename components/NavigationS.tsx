import * as React from "react";

export const NavigationS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.333 6.911l13.334-5.578L9.08 14.667h-.726L6.4 9.6 1.333 7.637v-.726zm7.43 4.688l3.14-7.504L4.4 7.228l2.54.986.608.237 1.215 3.148z"
      fill="currentColor"
    />
  </svg>
);
export default NavigationS;
