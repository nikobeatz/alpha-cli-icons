import * as React from "react";

export const ChevronForwardS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h17v16H0z" />
    <path
      d="M9.274 8L4.56 12.714 5.845 14l6-6-6-6L4.56 3.286 9.274 8z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronForwardS;
