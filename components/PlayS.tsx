import * as React from "react";

export const PlayS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.511 7.002a1.15 1.15 0 010 2.01l-9.869 5.513a1.151 1.151 0 01-1.712-1.004V2.493a1.15 1.15 0 011.712-1.005l9.87 5.514z"
      fill="currentColor"
    />
  </svg>
);
export default PlayS;
