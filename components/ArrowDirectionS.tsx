import * as React from "react";

export const ArrowDirectionS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.345 14.674V4.447h2.36v6.055l9.177-9.177 1.796 1.796-9.193 9.193h6.874v2.36H1.345z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDirectionS;
