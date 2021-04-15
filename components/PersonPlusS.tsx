import * as React from "react";

export const PersonPlusS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.364 5.382c0-1.5-1.248-2.715-2.788-2.715-1.54 0-2.788 1.215-2.788 2.715 0 1.5 1.247 2.715 2.788 2.715 1.54 0 2.788-1.215 2.788-2.715zM9.758 6.74v1.357h2.09v2.037h1.394V8.097h2.091V6.74h-2.09V4.703h-1.395V6.74h-2.09zM0 12.17v1.358h11.152V12.17c0-1.806-3.715-2.715-5.576-2.715-1.861 0-5.576.91-5.576 2.715z"
      fill="currentColor"
    />
  </svg>
);
export default PersonPlusS;
