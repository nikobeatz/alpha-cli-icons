import * as React from "react";

export const OpenS = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.54 1.485a.553.553 0 100 1.106h2.133L8.595 6.67a.553.553 0 10.782.782l4.102-4.101v2.18a.553.553 0 001.106 0V2.206a.553.553 0 00-.256-.467.553.553 0 00-.466-.255H10.54zm-7.105 2.33h3v-1.3h-3a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3h-1.3v3a.7.7 0 01-.7.7h-8a.7.7 0 01-.7-.7v-8a.7.7 0 01.7-.7z"
      fill="currentColor"
    />
  </svg>
);
export default OpenS;
