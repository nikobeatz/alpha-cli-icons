import * as React from "react";

export const CreditCardM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3.034 3h17.932C22.64 3 24 4.466 24 6.267v2.37H0v-2.37C0 4.466 1.36 3 3.034 3z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 17.727V11.33h24v6.396c0 1.802-1.36 3.268-3.034 3.268H3.034C1.36 20.995 0 19.529 0 17.727zm3.75-.38h3.918v-2.693H3.75v2.694z"
      fill="currentColor"
    />
  </svg>
);
export default CreditCardM;
