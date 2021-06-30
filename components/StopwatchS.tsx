import * as React from "react";

export const StopwatchS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 0h16v17H0z" />
    <path
      d="M12.035 5.307l.798-.798-.785-.785-.854.853a5.518 5.518 0 00-2.64-.988V2.451h1.11V1.34H6.332v1.11h1.11V3.59a5.518 5.518 0 00-2.64.988l-.854-.853-.785.785.798.798a5.553 5.553 0 108.074 0zm-4.037 8.25a4.442 4.442 0 110-8.884 4.442 4.442 0 010 8.884z"
      fill="currentColor"
    />
    <path
      d="M7.998 5.782v3.332H4.666a3.332 3.332 0 103.332-3.332z"
      fill="currentColor"
    />
  </svg>
);
export default StopwatchS;
