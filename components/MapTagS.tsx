import * as React from "react";

export const MapTagS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      d="M2.931 4.607v8.122l3.208-1.375 3.8 1.9 3.126-1.34V3.792l.825-.353a.317.317 0 01.441.291v9.02l-4.433 1.9-3.8-1.9-3.992 1.71a.317.317 0 01-.441-.291v-9.02l1.266-.542zm7.754 3.23l-2.687 2.686-2.687-2.686a3.8 3.8 0 115.374 0zm-2.687.895L9.79 6.941a2.533 2.533 0 10-3.582 0l1.791 1.791z"
      fill="currentColor"
    />
  </svg>
);
export default MapTagS;
