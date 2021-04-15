import * as React from "react";

export const ChevronForwardS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.381 8l-4.714 4.714L5.953 14l6-6-6-6-1.286 1.286L9.381 8z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronForwardS;
