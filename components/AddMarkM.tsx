import * as React from "react";

export const AddMarkM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.168 7.833h1.666v3.334h3.334v1.666h-3.334v3.334h-1.666v-3.334H7.834v-1.666h3.334V7.833z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.668 2A6.667 6.667 0 002 8.667v6.666A6.667 6.667 0 008.668 22h6.666a6.667 6.667 0 006.667-6.667V8.667A6.667 6.667 0 0015.334 2H8.668zm0 .833a5.833 5.833 0 00-5.834 5.834v6.666a5.833 5.833 0 005.834 5.834h6.666a5.833 5.833 0 005.834-5.834V8.667a5.833 5.833 0 00-5.834-5.834H8.668z"
      fill="currentColor"
    />
  </svg>
);
export default AddMarkM;
