import * as React from "react";

export const ShareS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M5.45 3.614a.623.623 0 00-.069.796.455.455 0 00.7.061l1.445-1.385v5.846a.49.49 0 00.98 0V3.058L9.983 4.47a.455.455 0 00.699-.06.623.623 0 00-.07-.797L8.375 1.47a.468.468 0 00-.345-.136.468.468 0 00-.34.136L5.45 3.614z"
      fill="currentColor"
    />
    <path
      d="M2.753 8.3a.556.556 0 111.112 0v3.033c0 1.228.994 2.223 2.222 2.223H9.91a2.222 2.222 0 002.222-2.223V8.3a.556.556 0 111.111 0v3.034a3.333 3.333 0 01-3.333 3.334H6.087a3.333 3.333 0 01-3.334-3.334V8.3z"
      fill="currentColor"
    />
  </svg>
);
export default ShareS;
