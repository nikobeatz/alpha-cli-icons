import * as React from "react";

export const CashM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3.33 7.88a2 2 0 00-1.242 2.224v9.007a2 2 0 002 2h15.87a2 2 0 002-2V9.864a2 2 0 00-2-2H3.372l-.04.016zm8.693 9.919a3.312 3.312 0 100-6.623 3.312 3.312 0 000 6.623z"
      fill="currentColor"
    />
    <path
      d="M7.628 6.208H19.16l-.791-2.033a2 2 0 00-2.59-1.138l-8.151 3.17z"
      fill="currentColor"
    />
  </svg>
);
export default CashM;
