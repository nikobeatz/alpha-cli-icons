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
    <path d="M0 0h16v16H0z" />
    <path
      d="M7.367 2a5.7 5.7 0 000 11.4h1.266c.753 0 1.472-.146 2.13-.411l2.276 1.3a.317.317 0 00.463-.357l-.647-2.402A5.7 5.7 0 008.633 2H7.367z"
      fill="currentColor"
    />
  </svg>
);
export default MessageS;
