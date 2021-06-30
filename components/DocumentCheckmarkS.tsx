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
      d="M8.32 3.676c0 .246.2.446.446.446h2.676v2.559a4.683 4.683 0 00-4.901 6.808H2.968c-.739 0-1.338-.6-1.338-1.338V2.338C1.63 1.6 2.229 1 2.968 1H8.32v2.676z"
      fill="currentColor"
    />
    <path d="M9.212 1.262v1.969h1.969L9.212 1.262z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.38 11.303a3.697 3.697 0 11-7.394 0 3.697 3.697 0 017.394 0zm-2.028-1.041a.32.32 0 00-.454-.008l-1.425 1.376-1.073-.9a.314.314 0 10-.403.48l1.509 1.267.004-.005.007.007 1.827-1.764a.32.32 0 00.008-.453z"
      fill="currentColor"
    />
  </svg>
);
export default DocumentCheckmarkS;
