import * as React from "react";

export const ArrowDirectionM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.001 22.023V6.683h3.54v9.083L19.307 2l2.694 2.694-13.79 13.79h10.311v3.54H2.001z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDirectionM;
