import * as React from "react";

export const LockM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      d="M17.625 9.505H17v-2.5c0-2.758-2.242-5-5-5s-5 2.242-5 5v2.5h-.625A1.877 1.877 0 004.5 11.38v8.75c0 1.034.841 1.875 1.875 1.875h11.25A1.877 1.877 0 0019.5 20.13v-8.75a1.877 1.877 0 00-1.875-1.875zm-8.959-2.5A3.338 3.338 0 0112 3.671a3.338 3.338 0 013.334 3.334v2.5H8.666v-2.5zm4.168 8.935v1.899a.834.834 0 11-1.668 0V15.94a1.66 1.66 0 01-.834-1.435c0-.919.748-1.666 1.667-1.666.918 0 1.666.747 1.666 1.666a1.658 1.658 0 01-.831 1.435z"
      fill="currentColor"
    />
  </svg>
);
export default LockM;
