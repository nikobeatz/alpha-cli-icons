import * as React from "react";

export const TicketM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M.755 4.15h6.416v15.7H.755c-.417 0-.755-.37-.755-.828V14.82c0-.458.338-.829.755-.829 1 0 1.814-.893 1.814-1.991s-.814-1.991-1.814-1.991c-.417 0-.755-.371-.755-.83v-4.2c0-.459.338-.83.755-.83zM24 9.18c0 .458-.338.829-.755.829-1 0-1.814.893-1.814 1.991s.813 1.991 1.814 1.991c.417 0 .755.371.755.83v4.2c0 .459-.338.83-.755.83H8.68V4.149h14.564c.417 0 .755.371.755.83v4.2z"
      fill="currentColor"
    />
  </svg>
);
export default TicketM;
