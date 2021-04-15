import * as React from "react";

export const PhotoS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.667 1.333a3.333 3.333 0 00-3.333 3.334V9.41L5.474 5.36 9.65 9.443l2.081-2.031 2.936 2.864v-5.61a3.333 3.333 0 00-3.333-3.333H4.667z"
      fill="currentColor"
    />
    <path
      d="M14.515 12.33l-2.784-2.716-.954.932 3.057 2.991c.306-.346.54-.756.681-1.207zM12.514 14.451L5.475 7.564l-4.13 4.042a3.334 3.334 0 003.322 3.06h6.667c.415 0 .813-.075 1.18-.215z"
      fill="currentColor"
    />
  </svg>
);
export default PhotoS;
