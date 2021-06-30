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
    <path d="M0 0h17v17H0z" />
    <path
      d="M8.007 2.335c-2.604 0-4.722 2.08-4.722 4.635 0 3.212 4.727 8.699 4.727 8.699s4.717-5.645 4.717-8.7c0-2.555-2.118-4.634-4.722-4.634zm1.425 5.992a2.029 2.029 0 01-1.425.578 2.028 2.028 0 01-1.425-.578 1.954 1.954 0 010-2.797 2.02 2.02 0 011.425-.58c.538 0 1.044.207 1.425.58a1.954 1.954 0 010 2.797z"
      fill="currentColor"
    />
  </svg>
);
export default LocationS;
