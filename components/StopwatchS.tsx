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
    <path d="M0 0h16v16H0z" />
    <path
      d="M12.037 5.3l.798-.797-.785-.786-.854.854a5.518 5.518 0 00-2.64-.989V2.444h1.11v-1.11H6.334v1.11h1.11v1.138a5.518 5.518 0 00-2.64.989l-.854-.854-.785.786.798.798a5.553 5.553 0 108.074 0zM8 13.55a4.443 4.443 0 110-8.885 4.443 4.443 0 010 8.885z"
      fill="currentColor"
    />
    <path
      d="M8 5.776v3.332H4.668A3.332 3.332 0 108 5.776z"
      fill="currentColor"
    />
  </svg>
);
export default StopwatchS;
