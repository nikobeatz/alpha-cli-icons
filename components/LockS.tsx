import * as React from "react";

export const LockS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.75 6.333h-.417V4.667A3.337 3.337 0 008 1.333a3.337 3.337 0 00-3.333 3.334v1.666H4.25c-.69 0-1.25.561-1.25 1.25v5.834c0 .689.56 1.25 1.25 1.25h7.5c.69 0 1.25-.561 1.25-1.25V7.583c0-.689-.56-1.25-1.25-1.25zM5.777 4.667c0-1.225.997-2.223 2.223-2.223s2.223.998 2.223 2.223v1.666H5.777V4.667zm2.779 5.956v1.266a.556.556 0 11-1.112 0v-1.266A1.106 1.106 0 018 8.556c.613 0 1.111.498 1.111 1.11 0 .41-.224.765-.554.957z"
      fill="currentColor"
    />
  </svg>
);
export default LockS;
