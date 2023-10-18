import React from "react";

export const CloseS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.336 3.413l-.926.926 3.67 3.67-3.67 3.671.926.926 3.67-3.67 3.67 3.67.926-.926-3.67-3.67 3.67-3.67-.925-.927-3.67 3.67-3.671-3.67z"
      fill="currentColor"
    />
  </svg>
);
export default CloseS;
