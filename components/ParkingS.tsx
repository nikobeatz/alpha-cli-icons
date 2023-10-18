import React from "react";

export const ParkingS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.39 1.34H3.005v13.333h3.077V10.23H8.39c2.546 0 4.615-1.993 4.615-4.445 0-2.451-2.07-4.444-4.616-4.444zm.153 5.926H6.082V4.303h2.461c.847 0 1.539.667 1.539 1.481 0 .815-.693 1.482-1.539 1.482z"
      fill="currentColor"
    />
  </svg>
);
export default ParkingS;
