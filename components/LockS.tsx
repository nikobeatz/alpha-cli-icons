import React from "react";

export const LockS = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.755 6.34h-.417V4.673A3.337 3.337 0 008.005 1.34a3.337 3.337 0 00-3.333 3.333V6.34h-.417c-.69 0-1.25.56-1.25 1.25v5.833c0 .69.56 1.25 1.25 1.25h7.5c.689 0 1.25-.56 1.25-1.25V7.59c0-.69-.561-1.25-1.25-1.25zM5.782 4.673c0-1.225.997-2.222 2.223-2.222s2.222.997 2.222 2.222V6.34H5.782V4.673zm2.779 5.957v1.266a.556.556 0 11-1.112 0V10.63a1.106 1.106 0 01.555-2.067c.613 0 1.11.498 1.11 1.11.002.41-.223.764-.553.957z"
      fill="currentColor"
    />
  </svg>
);
export default LockS;
