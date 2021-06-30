import * as React from "react";

export const AllertMarkS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.784 2.866c.56-.941 1.915-.941 2.475 0l5.221 8.76c.578.968-.115 2.2-1.237 2.2H2.8c-1.122 0-1.815-1.232-1.238-2.2l5.22-8.76zm.497 6.1V5.725h1.481v3.24H7.281zm.74 2.916c-.613 0-1.11-.435-1.11-.972 0-.537.497-.972 1.11-.972.614 0 1.112.435 1.112.972 0 .537-.498.972-1.111.972z"
      fill="currentColor"
    />
  </svg>
);
export default AllertMarkS;
