import React from "react";

export const DateRangeS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v17H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.939 1.34a.513.513 0 00-.513.513V2.885a2.222 2.222 0 00-2.051 2.216v7.35c0 1.227.995 2.222 2.222 2.222h6.838a2.222 2.222 0 002.222-2.222v-7.35c0-1.17-.904-2.128-2.051-2.216V1.853a.513.513 0 00-1.026 0v1.025H8.53V1.854a.513.513 0 00-1.026 0v1.025H5.452V1.854a.513.513 0 00-.513-.513zm3.547 5a.556.556 0 110 1.111H5.153a.556.556 0 010-1.111h3.333zm3.333 3.333a.556.556 0 00-.555-.555H5.153a.556.556 0 000 1.11h6.11a.556.556 0 00.556-.555z"
      fill="currentColor"
    />
  </svg>
);
export default DateRangeS;
