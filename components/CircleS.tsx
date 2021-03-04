import * as React from "react";

const CircleS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.727a3.273 3.273 0 100 6.546 3.273 3.273 0 000-6.546zM8 12a4 4 0 118 0 4 4 0 01-8 0z"
      fill="currentColor"
    />
  </svg>
);

export default CircleS;
