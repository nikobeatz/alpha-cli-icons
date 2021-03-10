import * as React from "react";

export const NextS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.412 3.524a.828.828 0 011.166.102l3.196 3.808c.137.164.2.365.193.564a.825.825 0 01-.193.564l-3.196 3.809a.828.828 0 11-1.268-1.064L11.412 8.8H2.829a.828.828 0 110-1.655h8.543L9.31 4.69a.828.828 0 01.102-1.166z"
      fill="currentColor"
    />
  </svg>
);
export default NextS;
