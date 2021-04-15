import * as React from "react";

export const FlagpoleFilledM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.04 3.83h8.26c.369 0 .669.3.669.67v8.929c0 .37-.3.67-.67.67H4.04v7.085c0 .37-.3.816-.67.816-.37 0-.67-.447-.67-.816V2.67a.67.67 0 011.34 0v1.16z"
      fill="currentColor"
    />
    <path
      d="M19.717 11.197l1.686 4.215a.67.67 0 01-.622.918H10.067a.67.67 0 01-.67-.67v-.223h2.902a2.011 2.011 0 002.009-2.008V6.063h6.473a.67.67 0 01.622.918l-1.686 4.216z"
      fill="currentColor"
    />
  </svg>
);
export default FlagpoleFilledM;
