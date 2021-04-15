import * as React from "react";

export const PortfolioM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15.335 6.2h4.374a2.29 2.29 0 012.292 2.292V11.2h-5v-1.042a.63.63 0 00-.625-.625.63.63 0 00-.625.625V11.2h-7.5v-1.042a.63.63 0 00-.625-.625.63.63 0 00-.625.625V11.2h-5V8.492A2.29 2.29 0 014.293 6.2h4.375v-.833c0-.92.748-1.667 1.667-1.667h3.333c.92 0 1.667.747 1.667 1.667V6.2zm-1.667 0v-.833h-3.333V6.2h3.333z"
      fill="currentColor"
    />
    <path
      d="M17.001 13.217v-.767h5v5.625a2.29 2.29 0 01-2.292 2.292H4.293A2.29 2.29 0 012 18.075V12.45h5v.767a.63.63 0 00.625.625.63.63 0 00.625-.625v-.767h7.5v.767a.63.63 0 00.625.625.63.63 0 00.625-.625z"
      fill="currentColor"
    />
  </svg>
);
export default PortfolioM;
