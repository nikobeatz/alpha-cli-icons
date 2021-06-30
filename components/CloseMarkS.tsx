import * as React from "react";

export const CloseMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.23 9.002L5.244 7.014l.785-.786 1.988 1.988 1.988-1.988.786.786-1.988 1.988 1.988 1.988-.786.785-1.988-1.988-1.988 1.988-.785-.785L7.23 9.002z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.016 2.335a6.667 6.667 0 100 13.333 6.667 6.667 0 000-13.333zm-6.11 6.667a6.111 6.111 0 1012.221 0 6.111 6.111 0 00-12.222 0z"
      fill="currentColor"
    />
  </svg>
);
export default CloseMarkS;
