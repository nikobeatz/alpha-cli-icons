import * as React from "react";

export const PieChartS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.59 1.333c-4.01 0-7.256 3.238-7.256 7.239 0 .215.175.39.39.39H8.59a.39.39 0 00.391-.39V1.723a.39.39 0 00-.39-.39zM5.809 10.09a.391.391 0 00-.343-.203H3.153a.391.391 0 00-.373.507 6.09 6.09 0 005.42 4.239V11.71a3.171 3.171 0 01-2.391-1.62zM10.417 2.776a.392.392 0 00-.508.373v2.306a.39.39 0 00.203.342 3.164 3.164 0 011.624 2.385h2.93c-.16-2.558-1.91-4.673-4.25-5.405zM11.737 8.962a3.173 3.173 0 01-2.755 2.748v2.923a6.077 6.077 0 005.685-5.671h-2.93z"
      fill="currentColor"
    />
  </svg>
);
export default PieChartS;
