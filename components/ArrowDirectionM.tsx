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
    <path d="M0 0h25v25H0z" />
    <path
      d="M2.173 22.014V6.671h3.54v9.084L19.48 1.99l2.694 2.694-13.789 13.79h10.31v3.54H2.175z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDirectionM;
