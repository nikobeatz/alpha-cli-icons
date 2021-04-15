import * as React from "react";

export const DocumentCheckmarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.69 4.01c0 .246.2.446.446.446h2.677v2.558a4.683 4.683 0 00-4.901 6.808H3.337c-.739 0-1.338-.6-1.338-1.338V2.67c0-.739.6-1.338 1.338-1.338H8.69V4.01z"
      fill="currentColor"
    />
    <path d="M9.582 1.596v1.968h1.969L9.582 1.596z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.75 11.636a3.697 3.697 0 11-7.394 0 3.697 3.697 0 017.395 0zm-2.028-1.041a.32.32 0 00-.454-.008l-1.425 1.376-1.073-.9a.314.314 0 00-.403.48l1.51 1.267.003-.004.007.007 1.827-1.765a.32.32 0 00.008-.453z"
      fill="currentColor"
    />
  </svg>
);
export default DocumentCheckmarkS;
