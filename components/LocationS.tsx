import * as React from "react";

export const LocationS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.996 1.333c-2.604 0-4.723 2.08-4.723 4.635C3.273 9.18 8 14.667 8 14.667s4.718-5.645 4.718-8.699c0-2.556-2.118-4.635-4.722-4.635zM9.42 7.325a2.028 2.028 0 01-1.424.578 2.028 2.028 0 01-1.425-.578 1.954 1.954 0 010-2.797 2.02 2.02 0 011.425-.579c.538 0 1.044.206 1.424.58a1.954 1.954 0 010 2.796z"
      fill="currentColor"
    />
  </svg>
);
export default LocationS;
