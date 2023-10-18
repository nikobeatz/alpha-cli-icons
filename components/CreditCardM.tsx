import React from "react";

export const CreditCardM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.533 4.5h14.944c1.394 0 2.528 1.221 2.528 2.723v1.974h-20V7.223C2.005 5.72 3.139 4.5 4.533 4.5z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.005 16.772v-5.33h20v5.33c0 1.502-1.134 2.724-2.528 2.724H4.533c-1.394 0-2.528-1.222-2.528-2.724zm3.124-.315h3.266V14.21H5.13v2.246z"
      fill="currentColor"
    />
  </svg>
);
export default CreditCardM;
