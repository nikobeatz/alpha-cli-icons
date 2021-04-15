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
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.762 2.706c.561-.941 1.915-.941 2.476 0l5.22 8.76c.578.968-.115 2.2-1.237 2.2H2.78c-1.122 0-1.815-1.232-1.238-2.2l5.221-8.76zm.497 6.1V5.565h1.482v3.24H7.259zM8 11.722c-.613 0-1.11-.435-1.11-.972 0-.537.497-.972 1.11-.972.614 0 1.111.435 1.111.972 0 .537-.497.972-1.11.972z"
      fill="currentColor"
    />
  </svg>
);
export default AllertMarkS;
