import * as React from "react";

export const PenM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M21.828 1.223A3.92 3.92 0 0018.998 0a3.89 3.89 0 00-2.83 1.224L2.397 15.592c-.115.12-.2.266-.252.427L.054 22.564c-.183.572.114 1.19.661 1.38a1.007 1.007 0 00.66 0l6.273-2.181a1.04 1.04 0 00.409-.264l13.77-14.37c1.564-1.63 1.564-4.275.001-5.906zM16 20h8v4h-8v-4z"
      fill="currentColor"
    />
  </svg>
);
export default PenM;
