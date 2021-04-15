import * as React from "react";

export const CalendarM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.448 2a.758.758 0 00-.757.758v1.561c0 .036.002.071.007.105A4.002 4.002 0 003.66 8.308V18a4 4 0 004 4h8.667a4 4 0 004-4V9.917H3.66v-1.25h16.667v-.36a4.002 4.002 0 00-2.84-3.828.776.776 0 00.019-.171V2.769a.77.77 0 00-1.539 0v1.539H8.206v-1.55A.758.758 0 007.448 2zm1.47 11.923a1.154 1.154 0 11-2.308 0 1.154 1.154 0 012.307 0zm2.691 1.154a1.154 1.154 0 100-2.308 1.154 1.154 0 000 2.308zm-2.692 2.692a1.154 1.154 0 11-2.307 0 1.154 1.154 0 012.307 0zm6.539-2.692a1.154 1.154 0 100-2.308 1.154 1.154 0 000 2.308z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarM;
