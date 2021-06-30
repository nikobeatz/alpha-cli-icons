import * as React from "react";

export const ChevronDownM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.005 13.65l-5.5-5.5-1.5 1.5 7 7 7-7-1.5-1.5-5.5 5.5z"
      fill="currentColor"
      opacity={0.75}
    />
  </svg>
);
export default ChevronDownM;
