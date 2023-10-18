import React from "react";

export const DotsS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.581 8.006a1.286 1.286 0 11-2.571 0 1.286 1.286 0 012.571 0zM9.295 8.006a1.286 1.286 0 11-2.571 0 1.286 1.286 0 012.571 0zM12.724 9.291a1.286 1.286 0 100-2.571 1.286 1.286 0 000 2.571z"
      fill="currentColor"
    />
  </svg>
);
export default DotsS;
