import * as React from "react";

export const HeartFillM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 21.833C8.387 18.547 2 14.46 2 8.995 2 5.918 4.42 3.5 7.5 3.5c1.74 0 3.41.758 4.5 2.037C13.09 4.258 14.76 3.5 16.5 3.5c3.08 0 5.5 2.418 5.5 5.495 0 5.455-6.379 9.57-10 12.838z"
      fill="currentColor"
    />
  </svg>
);
export default HeartFillM;
