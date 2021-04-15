import * as React from "react";

export const PenS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.46 2.013a2.177 2.177 0 00-1.572-.68 2.162 2.162 0 00-1.572.68L2.665 9.996a.618.618 0 00-.14.237l-1.162 3.636a.612.612 0 00.368.767.56.56 0 00.367 0l3.484-1.212a.579.579 0 00.228-.147l7.65-7.983a2.392 2.392 0 000-3.281zM10.222 12.444h4.445v2.223h-4.445v-2.223z"
      fill="currentColor"
    />
  </svg>
);
export default PenS;
