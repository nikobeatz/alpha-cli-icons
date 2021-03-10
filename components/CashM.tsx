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
      d="M2.252 7.144a2 2 0 00-1.14 2.59l.018.045v11.042a2 2 0 002 2h19.757a2 2 0 002-2V8.983a2 2 0 00-2-2H2.665l-.413.161zm5.502-2.14H21.54l-1.087-2.795a2 2 0 00-2.589-1.139L7.754 5.004zm5.255 13.857a3.96 3.96 0 100-7.919 3.96 3.96 0 000 7.92z"
      fill="currentColor"
    />
  </svg>
);
export default CashM;
