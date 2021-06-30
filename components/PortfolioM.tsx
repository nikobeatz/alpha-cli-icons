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
    <path d="M0 0h25v25H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.339 6.165h4.374a2.29 2.29 0 012.292 2.292v2.708h-5v-1.042a.63.63 0 00-.625-.625.63.63 0 00-.625.625v1.042h-7.5v-1.042a.63.63 0 00-.625-.625.63.63 0 00-.625.625v1.042h-5V8.457a2.29 2.29 0 012.292-2.292h4.375v-.833c0-.92.747-1.667 1.667-1.667h3.333c.92 0 1.667.748 1.667 1.667v.833zm-1.667 0v-.833h-3.333v.833h3.333z"
      fill="currentColor"
    />
    <path
      d="M17.005 13.182v-.767h5v5.625a2.29 2.29 0 01-2.292 2.292H4.297a2.29 2.29 0 01-2.292-2.292v-5.625h5v.767a.63.63 0 00.625.625.63.63 0 00.625-.625v-.767h7.5v.767a.63.63 0 00.625.625.63.63 0 00.625-.625z"
      fill="currentColor"
    />
  </svg>
);
export default PortfolioM;
