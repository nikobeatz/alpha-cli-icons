import * as React from "react";

export const DotsM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.287 12.143a2.143 2.143 0 11-4.286 0 2.143 2.143 0 014.286 0zm7.857 0a2.143 2.143 0 11-4.286 0 2.143 2.143 0 014.286 0zm5.714 2.143a2.143 2.143 0 100-4.286 2.143 2.143 0 000 4.286z"
      fill="currentColor"
    />
  </svg>
);
export default DotsM;
