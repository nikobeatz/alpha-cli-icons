import React from "react";

export const DocumentCheckmarkM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v24H0z" />
    <path
      d="M12.476 5.514c0 .37.299.67.668.67h4.015v3.837a7.025 7.025 0 00-7.352 10.212h-5.36a2.007 2.007 0 01-2.007-2.007V3.507C2.44 2.4 3.339 1.5 4.447 1.5h8.028v4.014z"
      fill="currentColor"
    />
    <path d="M13.813 1.893v2.953h2.953l-2.953-2.953z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.566 16.954a5.546 5.546 0 11-11.092 0 5.546 5.546 0 0111.092 0zm-3.043-1.562a.48.48 0 00-.68-.011l-2.138 2.064-1.61-1.35a.47.47 0 00-.605.72l2.264 1.9.006-.006.01.01 2.74-2.647a.481.481 0 00.013-.68z"
      fill="currentColor"
    />
  </svg>
);
export default DocumentCheckmarkM;
