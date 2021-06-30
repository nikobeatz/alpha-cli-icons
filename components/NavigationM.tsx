import * as React from "react";

export const NavigationM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 10.372l20-8.367-8.378 20h-1.089l-2.933-7.6L2 11.461v-1.09zm11.145 7.031l4.71-11.256-11.255 4.7 3.811 1.478.912.356 1.822 4.722z"
      fill="currentColor"
    />
  </svg>
);
export default NavigationM;
