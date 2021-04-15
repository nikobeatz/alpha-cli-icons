import * as React from "react";

export const RefreshS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.168 1.529a.7.7 0 01.97 0l2.059 2a.653.653 0 010 .942l-2.059 2a.7.7 0 01-.97 0 .653.653 0 010-.942l.887-.862H7.967C5.532 4.667 3.506 6.635 3.506 9s2.026 4.333 4.46 4.333c2.435 0 4.461-1.968 4.461-4.333 0-.368.308-.667.687-.667.379 0 .686.299.686.667 0 3.101-2.64 5.667-5.833 5.667S2.133 12.1 2.133 9c0-3.102 2.64-5.667 5.834-5.667h1.088l-.887-.862a.653.653 0 010-.942z"
      fill="currentColor"
    />
  </svg>
);
export default RefreshS;
