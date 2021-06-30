import * as React from "react";

export const SearchS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.823 11.939a5.881 5.881 0 111.17-1.204l2.528 2.529a.554.554 0 010 .784l-.403.402a.554.554 0 01-.784 0l-2.511-2.511zm.609-4.658a4.2 4.2 0 11-8.402 0 4.2 4.2 0 018.402 0z"
      fill="currentColor"
    />
  </svg>
);
export default SearchS;
