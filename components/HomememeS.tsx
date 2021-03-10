import * as React from "react";

export const HomememeS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.659 2.145a.21.21 0 01.244-.002l10.443 7.276a1.053 1.053 0 001.203-1.728L13.107.416a2.316 2.316 0 00-2.686.027L.434 7.703a1.053 1.053 0 001.238 1.703l9.987-7.26zm-7.811 9.309a2 2 0 01.805-1.604l5.953-4.431a2 2 0 012.345-.032l6.351 4.465a2 2 0 01.85 1.636v9.593a2 2 0 01-2 2H5.848a2 2 0 01-2-2v-9.627zm8.994 2.154a1.895 1.895 0 113.79 0 1.895 1.895 0 01-3.79 0z"
      fill="currentColor"
    />
  </svg>
);
export default HomememeS;
