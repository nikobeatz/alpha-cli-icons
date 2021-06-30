import * as React from "react";

export const HeartFillS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.011 14.112c-2.409-2.19-6.666-4.916-6.666-8.559A3.63 3.63 0 015.01 1.89c1.16 0 2.274.505 3 1.358.727-.853 1.84-1.358 3-1.358a3.63 3.63 0 013.667 3.663c0 3.637-4.252 6.38-6.667 8.56z"
      fill="currentColor"
    />
  </svg>
);
export default HeartFillS;
