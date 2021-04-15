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
    <path d="M0 0h24v24H0z" />
    <path
      d="M17.626 9.5h-.625V7c0-2.758-2.243-5-5-5-2.758 0-5 2.242-5 5v2.5h-.625a1.877 1.877 0 00-1.875 1.875v8.75c0 1.034.841 1.875 1.875 1.875h11.25a1.877 1.877 0 001.875-1.875v-8.75A1.877 1.877 0 0017.626 9.5zM8.667 7a3.338 3.338 0 013.334-3.334A3.338 3.338 0 0115.335 7v2.5H8.667V7zm4.168 8.935v1.899a.834.834 0 11-1.668 0v-1.899a1.66 1.66 0 01-.833-1.435c0-.919.747-1.666 1.666-1.666.918 0 1.666.747 1.666 1.666a1.659 1.659 0 01-.831 1.435z"
      fill="currentColor"
    />
  </svg>
);
export default LockM;
