import * as React from "react";

export const CheckmarkRoudnedS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm17.76-2.967a.818.818 0 00-1.157-1.157l-6.512 6.512-2.694-2.694a.818.818 0 00-1.157 1.157l3.272 3.273c.32.32.838.32 1.157 0l7.091-7.09z"
      fill="currentColor"
    />
  </svg>
);
export default CheckmarkRoudnedS;
