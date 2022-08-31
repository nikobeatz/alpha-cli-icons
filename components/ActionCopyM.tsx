import * as React from "react";

export const ActionCopyM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M20 20H8V8h12M8 6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H8zm6-4H4a2 2 0 00-2 2v10h2V4h10V2z"
      fill="currentColor"
    />
  </svg>
);
export default ActionCopyM;
