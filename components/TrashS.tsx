import * as React from "react";

export const TrashS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.908 2.99a2 2 0 012-1.99h2.177a2 2 0 012 1.99h2.82a.508.508 0 110 1.016h-.57V12a3 3 0 01-3 3h-4.67a3 3 0 01-3-3V4.006h-.577a.508.508 0 010-1.016h2.82zm1.1 0h4.106a1.01 1.01 0 00.006-.108v-.058a1 1 0 00-1-1H7.002a1 1 0 00-1 1v.058c0 .037.002.073.006.108zM3.742 4.006h8.517v7.95a2 2 0 01-2 2H5.741a2 2 0 01-2-2v-7.95z"
      fill="currentColor"
    />
  </svg>
);
export default TrashS;
