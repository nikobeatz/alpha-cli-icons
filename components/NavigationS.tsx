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
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.345 6.918L14.678 1.34 9.093 14.673h-.726L6.41 9.607 1.345 7.644v-.726zm7.43 4.687l3.14-7.503-7.503 3.133 2.54.985.608.237 1.215 3.148z"
      fill="currentColor"
    />
  </svg>
);
export default NavigationS;
