import * as React from "react";

export const PlusM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      d="M13.022 2.856h-2.048v8.12h-8.12v2.048h8.12v8.12h2.048v-8.12h8.12v-2.048h-8.12v-8.12z"
      fill="currentColor"
    />
  </svg>
);
export default PlusM;
