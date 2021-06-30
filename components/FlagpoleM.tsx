import * as React from "react";

export const FlagpoleM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.8 21.005v-6.3m0 0s.9-.9 3.6-.9 4.5 1.8 7.2 1.8 3.6-.9 3.6-.9v-10.8s-.9.9-3.6.9-4.5-1.8-7.2-1.8-3.6.9-3.6.9v10.8z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default FlagpoleM;
