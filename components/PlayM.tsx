import * as React from "react";

export const PlayM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M21.875 10.254c1.366.763 1.366 2.729 0 3.492l-17.15 9.582c-1.333.745-2.975-.219-2.975-1.746V2.418C1.75.891 3.392-.072 4.726.672l17.15 9.582z"
      fill="currentColor"
    />
  </svg>
);
export default PlayM;
