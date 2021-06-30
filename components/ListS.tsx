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
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.21 4.153c0-1.004.814-1.818 1.818-1.818h7.958c1.004 0 1.818.814 1.818 1.818v9.697a1.818 1.818 0 01-1.818 1.818H4.028A1.818 1.818 0 012.21 13.85V4.153zm1.74 1.66a.58.58 0 111.159 0 .58.58 0 01-1.16 0zm2.898-.58a.58.58 0 000 1.16h4.637a.58.58 0 000-1.16H6.848zM3.949 8.712a.58.58 0 111.16 0 .58.58 0 01-1.16 0zm2.899-.58a.58.58 0 000 1.16h4.637a.58.58 0 000-1.16H6.848zM3.949 11.61a.58.58 0 111.16 0 .58.58 0 01-1.16 0zm2.899-.58a.58.58 0 000 1.16h4.637a.58.58 0 000-1.16H6.848z"
      fill="currentColor"
    />
  </svg>
);
export default ListS;
