import * as React from "react";

export const StopwatchM = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M18.056 7.95l1.197-1.196-1.178-1.178-1.28 1.28a8.277 8.277 0 00-3.962-1.482V3.666H14.5V2H9.502v1.666h1.666v1.708a8.277 8.277 0 00-3.962 1.482l-1.28-1.28-1.178 1.178L5.945 7.95a8.33 8.33 0 1012.111 0zM12 20.326a6.664 6.664 0 116.664-6.663A6.671 6.671 0 0112 20.325z"
      fill="currentColor"
    />
    <path
      d="M12 8.664v4.998H7.004A4.997 4.997 0 1012 8.663z"
      fill="currentColor"
    />
  </svg>
);
export default StopwatchM;
