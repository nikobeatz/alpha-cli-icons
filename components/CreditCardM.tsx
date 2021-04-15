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
      d="M4.529 4.5h14.944C20.867 4.5 22 5.721 22 7.223v1.974h-20V7.223C2.001 5.72 3.135 4.5 4.529 4.5z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.001 16.772v-5.33h20v5.33c0 1.502-1.134 2.724-2.528 2.724H4.529c-1.394 0-2.528-1.222-2.528-2.724zm3.124-.315h3.266V14.21H5.125v2.246z"
      fill="currentColor"
    />
  </svg>
);
export default CreditCardM;
