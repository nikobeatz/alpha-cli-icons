import * as React from "react";

export const ParkingS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.385 1.333H3v13.334h3.077v-4.445h2.308C10.93 10.222 13 8.23 13 5.778s-2.07-4.445-4.615-4.445zm.153 5.926H6.077V4.296h2.461c.847 0 1.539.667 1.539 1.482s-.692 1.481-1.539 1.481z"
      fill="currentColor"
    />
  </svg>
);
export default ParkingS;
