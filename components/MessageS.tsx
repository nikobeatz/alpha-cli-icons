import * as React from "react";

export const MessageS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.365 1.84a5.7 5.7 0 100 11.4h1.267c.753 0 1.472-.146 2.13-.411l2.276 1.3a.317.317 0 00.463-.357l-.647-2.402a5.7 5.7 0 00-4.222-9.53H7.365z"
      fill="currentColor"
    />
  </svg>
);
export default MessageS;
