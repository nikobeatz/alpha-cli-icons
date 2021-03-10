import * as React from "react";

export const DotsS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.571 8.286a1.286 1.286 0 11-2.571 0 1.286 1.286 0 012.571 0zM9.286 8.286a1.286 1.286 0 11-2.572 0 1.286 1.286 0 012.572 0zM12.714 9.571a1.286 1.286 0 100-2.571 1.286 1.286 0 000 2.571z"
      fill="currentColor"
    />
  </svg>
);
export default DotsS;
