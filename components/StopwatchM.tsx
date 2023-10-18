import React from "react";

export const StopwatchM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v25H0z" />
    <path
      d="M18.055 7.956l1.197-1.197-1.178-1.178-1.28 1.28a8.277 8.277 0 00-3.962-1.482V3.67h1.666V2.005H9.502v1.666h1.666v1.708A8.277 8.277 0 007.205 6.86l-1.28-1.28-1.178 1.178 1.197 1.197a8.33 8.33 0 1012.111 0zM12 20.33a6.664 6.664 0 116.663-6.663A6.671 6.671 0 0112 20.33z"
      fill="currentColor"
    />
    <path
      d="M12 8.669v4.997H7.002A4.998 4.998 0 1012 8.67z"
      fill="currentColor"
    />
  </svg>
);
export default StopwatchM;
