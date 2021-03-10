import * as React from "react";

export const WalletM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M18.979 3.752H5.756L13.062.37a3.955 3.955 0 015.277 1.965l.64 1.417zM4 5.776a4 4 0 00-4 4V20a4 4 0 004 4h14a4 4 0 004-4v-.15a5 5 0 01-6-4.9v-.124a5 5 0 016-4.9v-.15a4 4 0 00-4-4H4z"
      fill="currentColor"
    />
    <path
      d="M21 11.85a3 3 0 00-3 3v.075a3 3 0 006 0v-.074a3 3 0 00-3-3z"
      fill="currentColor"
    />
  </svg>
);
export default WalletM;
