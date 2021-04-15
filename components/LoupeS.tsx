import * as React from "react";

export const LoupeS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.046 11.22l-1.38-1.413a2.053 2.053 0 00-2.266-.38l-.6-.6a4.666 4.666 0 10-.94.94l.593.593a2 2 0 00.354 2.307l1.413 1.413a2 2 0 002.826 0 2.001 2.001 0 000-2.86zM8.393 8.393a3.333 3.333 0 11-4.708-4.72 3.333 3.333 0 014.708 4.72zm4.713 4.714a.667.667 0 01-.946 0l-1.414-1.414a.665.665 0 010-.946.666.666 0 01.947 0l1.414 1.413a.665.665 0 010 .947z"
      fill="currentColor"
    />
  </svg>
);
export default LoupeS;
