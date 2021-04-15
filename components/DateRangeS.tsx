import * as React from "react";

export const DateRangeS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h16v16H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.924 1.333a.513.513 0 00-.513.513v1.032A2.222 2.222 0 002.36 5.094v7.35c0 1.228.995 2.223 2.222 2.223h6.838a2.222 2.222 0 002.222-2.223v-7.35c0-1.17-.904-2.128-2.051-2.216V1.846a.513.513 0 10-1.026 0v1.026H8.514V1.846a.513.513 0 10-1.026 0v1.026H5.437V1.846a.513.513 0 00-.513-.513zm3.547 5a.556.556 0 010 1.111H5.138a.556.556 0 010-1.11H8.47zm3.333 3.334a.556.556 0 00-.555-.556H5.138a.556.556 0 000 1.111h6.11a.556.556 0 00.556-.555z"
      fill="currentColor"
    />
  </svg>
);
export default DateRangeS;
