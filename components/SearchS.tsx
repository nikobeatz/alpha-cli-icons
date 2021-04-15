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
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.807 11.872a5.881 5.881 0 111.169-1.204l2.528 2.53a.554.554 0 010 .783l-.402.402a.554.554 0 01-.784 0l-2.511-2.51zm.609-4.657a4.201 4.201 0 11-8.402 0 4.201 4.201 0 018.402 0z"
      fill="currentColor"
    />
  </svg>
);
export default SearchS;
