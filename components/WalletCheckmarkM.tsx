import * as React from "react";

export const WalletCheckmarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.05 5.72A2.001 2.001 0 005.82 7.719v4.3c3.331.248 5.964 2.996 6.021 6.37h10.98a2 2 0 002-2V7.72a2 2 0 00-2-2H7.048zm8.271 9.5a3.167 3.167 0 100-6.333 3.167 3.167 0 000 6.333z"
      fill="currentColor"
    />
    <path
      d="M11.118 4.137h11.027l-.725-1.862a2 2 0 00-2.589-1.138l-7.713 3z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.66 18.495a5.324 5.324 0 01-5.33 5.318A5.324 5.324 0 010 18.496a5.324 5.324 0 015.33-5.318c2.943 0 5.33 2.38 5.33 5.317zm-3.137-1.302a.75.75 0 01-.072 1.059l-2.354 2.055-1.89-1.649a.75.75 0 11.987-1.13l.903.788 1.367-1.194a.75.75 0 011.059.072z"
      fill="currentColor"
    />
  </svg>
);
export default WalletCheckmarkM;
