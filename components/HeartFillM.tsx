import React from "react";

export const HeartFillM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h25v25H0z" />
    <path
      d="M12.005 21.173c-3.614-3.286-10-7.374-10-12.838 0-3.077 2.42-5.495 5.5-5.495 1.74 0 3.41.758 4.5 2.037 1.09-1.279 2.76-2.037 4.5-2.037 3.08 0 5.5 2.418 5.5 5.495 0 5.455-6.379 9.57-10 12.838z"
      fill="currentColor"
    />
  </svg>
);
export default HeartFillM;
