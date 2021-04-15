import * as React from "react";

export const RepeatCircleM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-13.5a3.5 3.5 0 00-3.5 3.5h-1.5a5 5 0 018.818-3.228l.182-1.272h1V11h-3.5v-1l1.24-.177a3.494 3.494 0 00-2.74-1.323zm3.5 3.5a3.5 3.5 0 01-6.24 2.177L10.5 14v-1h-3.5v3.5h1l.182-1.272A5 5 0 0017 12h-1.5z"
      fill="currentColor"
    />
  </svg>
);
export default RepeatCircleM;
