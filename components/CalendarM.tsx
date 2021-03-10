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
      d="M6.545 0a.91.91 0 00-.91.91v1.876A4 4 0 002 6.769V8h20V6.77c0-2.001-1.468-3.658-3.386-3.954l.001-.047V.923a.923.923 0 00-1.846 0V2.77H7.454V.91A.91.91 0 006.545 0zM22 9.5H2V20a4 4 0 004 4h12a4 4 0 004-4V9.5zM8.308 14.308a1.385 1.385 0 11-2.77 0 1.385 1.385 0 012.77 0zm3.23 1.384a1.385 1.385 0 100-2.769 1.385 1.385 0 000 2.77zm-3.23 3.231a1.385 1.385 0 11-2.77 0 1.385 1.385 0 012.77 0zm7.846-3.23a1.385 1.385 0 100-2.77 1.385 1.385 0 000 2.77z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarM;
