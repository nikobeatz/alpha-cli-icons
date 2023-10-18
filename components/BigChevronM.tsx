import React from "react";

export const BigChevronM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.753 12l6.967-8.694L15.096 1 6.289 11.991l-.009.008.001.001v.002l.007.007L15.096 23l2.624-2.306L10.753 12z"
      fill="currentColor"
    />
  </svg>
);
export default BigChevronM;
