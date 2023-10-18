import React from "react";

export const TrashS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.923 2.99a2 2 0 012-1.99H9.1a2 2 0 012 1.99h2.82a.508.508 0 110 1.016h-.57V12a3 3 0 01-3 3H5.68a3 3 0 01-3-3V4.006h-.576a.508.508 0 110-1.016h2.82zm1.1 0h4.106a1.01 1.01 0 00.006-.108v-.058a1 1 0 00-1-1H7.017a1 1 0 00-1 1v.058c0 .037.002.073.006.108zM3.757 4.006h8.516v7.95a2 2 0 01-2 2H5.757a2 2 0 01-2-2v-7.95z"
      fill="currentColor"
    />
  </svg>
);
export default TrashS;
