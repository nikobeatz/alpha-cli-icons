import React from "react";

export const NextM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.306 5.29a1.242 1.242 0 011.75.154l4.793 5.712c.206.246.3.548.29.846.011.297-.084.6-.29.846l-4.794 5.713a1.241 1.241 0 11-1.902-1.596l3.154-3.758H4.43a1.241 1.241 0 110-2.483h12.815L14.153 7.04a1.242 1.242 0 01.153-1.75z"
      fill="currentColor"
    />
  </svg>
);
export default NextM;
