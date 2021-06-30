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
    <path d="M0 0h17v17H0z" />
    <path
      d="M4.678 1.34a3.333 3.333 0 00-3.333 3.333v4.745l4.142-4.053L9.66 9.45l2.082-2.032 2.935 2.864V4.673a3.333 3.333 0 00-3.333-3.333H4.678z"
      fill="currentColor"
    />
    <path
      d="M14.527 12.337L11.742 9.62l-.955.931 3.057 2.992a3.33 3.33 0 00.681-1.207zM12.525 14.458L5.487 7.571l-4.131 4.042a3.334 3.334 0 003.322 3.06h6.667c.415 0 .813-.076 1.18-.215z"
      fill="currentColor"
    />
  </svg>
);
export default PhotoS;
