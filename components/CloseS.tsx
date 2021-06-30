import * as React from "react";

export const CloseS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.688 2.335L1.345 3.678l5.324 5.324-5.324 5.323 1.343 1.343 5.323-5.323 5.324 5.323 1.343-1.342-5.324-5.324 5.324-5.324-1.343-1.343-5.324 5.324-5.323-5.324z"
      fill="currentColor"
    />
  </svg>
);
export default CloseS;
