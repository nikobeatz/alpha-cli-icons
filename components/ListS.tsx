import * as React from "react";

export const ListS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.2 3.152c0-1.005.814-1.819 1.818-1.819h7.958c1.004 0 1.818.814 1.818 1.819v9.697a1.818 1.818 0 01-1.818 1.818H4.018A1.818 1.818 0 012.2 12.848V3.152zm1.74 1.66a.58.58 0 111.159 0 .58.58 0 01-1.16 0zm2.898-.58a.58.58 0 100 1.16h4.638a.58.58 0 100-1.16H6.838zM3.939 7.71a.58.58 0 111.16 0 .58.58 0 01-1.16 0zm2.899-.58a.58.58 0 100 1.16h4.638a.58.58 0 100-1.16H6.838zM3.939 10.61a.58.58 0 111.16 0 .58.58 0 01-1.16 0zm2.899-.58a.58.58 0 100 1.16h4.638a.58.58 0 100-1.16H6.838z"
      fill="currentColor"
    />
  </svg>
);
export default ListS;
